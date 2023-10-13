// key="AIzaSyDTqG2jeHElovheHWfUDX2KIbZfQkTu18Y"
// cx="85b9db9051cd145e7"
//https://www.googleapis.com/customsearch/v1?key=AIzaSyDTqG2jeHElovheHWfUDX2KIbZfQkTu18Y&cx=85b9db9051cd145e7&q=reactjs

import './App.css';
import gapps from './assets/gapps.png'
import dp from './assets/profile.jpg'
import searchIcon from './assets/searchIcon.png'
import micIcon from './assets/micIcon.png'
import imageSearch from './assets/imgSearch.png'
import logoImg from './assets/googlelogo.png'

import { useState } from 'react';

import Results from './Results';



function Navbar()
{
  return(
    <div class='navbar'>
        <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
        <img className="gapps" src={gapps} />
        <img className="dp" src={dp}/>

    </div>
  )
}

function SearchBar({query,setQuery,setData})
{

    return(
        <div className="search-bar">
            <img src={searchIcon}
             onClick={async ()=>{
                const res = await  fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyDTqG2jeHElovheHWfUDX2KIbZfQkTu18Y&cx=85b9db9051cd145e7&q="+query)
                const resjson  = await  res.json()
                setData(resjson)
             }} />

            <input
            onChange={(e)=>{setQuery(e.target.value)}} value = {query}/>
          { query?.length>0 &&  <p onClick={()=>{setQuery("")}}>x</p> }
            <img src={micIcon} />
            <img src={imageSearch} />
        </div>
    )
}

function Logo()
{
    return (
        <img className="logo" src={logoImg} />
    )
}

function Lang()
{
    return (
        <div className="lang">
            <p>Google offered in:</p>
            <a href="">हिन्दी</a> 
            <a href="">বাংলা</a>
            <a href="">తెలుగు</a>
            <a href="">मराठी</a>
            <a href="">தமிழ்</a>
            <a href="">ગુજરાતી</a>
            <a href="">ಕನ್ನಡ</a>
            <a href="">മലയാളം</a>
            <a href="">ਪੰਜਾਬੀ</a>

        </div>
    )

}

function Main({setData,query,setQuery})
{


    return (
        <div className='main'>
        <Logo/>
        <SearchBar query={query} setQuery={setQuery} setData={setData}/>
        <Buttons query={query} setQuery={setQuery} setData = {setData}/>
        <Lang/>
        </div>
    )
}

function Footer()
{
    return(
        <div className="footer">
            <div className="up">India</div>
            <hr></hr>
            <div className="down">
                <div className="part1">
                <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
                <a href="https://www.google.com/intl/en_in/business/">Business</a>
                <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
                </div>

                <div className="part2">
                <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a>
                <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
                <a href="#">Settings</a>
                </div>

            </div>
        </div>
    )
}

function Buttons({query,setQuery,setData})
{

    return(
        <div className="buttons">
            <button

            onClick={async ()=>{
               const res = await  fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyDTqG2jeHElovheHWfUDX2KIbZfQkTu18Y&cx=85b9db9051cd145e7&q="+query)
               const resjson  = await  res.json()
               setData(resjson)
            }}

            >Google Search</button>
            <a href="https://www.google.com/doodles"><button>I'm Feeling Lucky</button></a>
        </div>
    )
}
function App() {

    const [data,setData] = useState({})
    const [query,setQuery] = useState("");

  return (
    <div className="app">

  {
    Object.keys(data).length===0 &&
    <>
    <Navbar/>
   <Main setData = {setData} query={query} setQuery={setQuery}/>
   <Footer/>
   </>

   }

   {Object.keys(data).length>0 &&  <Results SearchBar = {SearchBar} setData={setData} data = {data} query={query} setQuery={setQuery}/>  }
  </div>
  );
}

export default App;

// 9753431789