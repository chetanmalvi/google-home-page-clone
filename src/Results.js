import logoImg from './assets/googlelogo.png'
import './Results.css'

function Header({SearchBar,query,setQuery,setData})
{
    return (
        <div className="Header">
         <img src={logoImg}
         onClick={()=>{
            window.location.reload()
         }}/>
         <SearchBar query={query} setQuery={setQuery} setData={setData}/>
        </div>
    )
}

function About()
{
    return(
        <p>About 100,00,000 results
        (0.23 seconds)</p>
    )
}

function Site({item})
{
    let icon
    if(item.pagemap.metatags)
    icon = item.pagemap.metatags[0]["og:image"]
    else
    icon = item.pagemap.cse_image[0].src;

    return(
        <div className="Site">
         <div className="icon-div">
            <img className="img-icon" src={icon} />
            <div>
                <h3>{item?.title}</h3>
                <p>{item?.link}</p>
            </div>
         </div>
         <a href={item?.link}>{item?.title}</a>
         <p>{item?.snippet}</p>

        </div>
    )
}
function Sites({items})
{
    return(
        items?.map(item=><Site item={item}/>)
    )
}
function Results({SearchBar,data,query,setQuery,setData}) {

    return (
        <div className="Results">
            <Header SearchBar={SearchBar} query={query} setQuery={setQuery} setData={setData}/>
            <About/>
            <Sites items = {data.items}/>

        </div>
    )
}

export default Results