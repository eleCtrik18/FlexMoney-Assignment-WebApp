import "./widgetSm.css";
import React,{useEffect,useState} from 'react'


export default function WidgetSm() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/api").then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">All members</span>
      {
        users.map(item => {
          return(
      <div className="widgetSmList">
        <li className="widgetSmListItem">
          {/* <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          /> */}
           
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{item.name}</span>
            <span className="widgetSmUserTitle">{item.age}</span>
          </div>
          <button className="widgetSmButton">
            <span className="widgetSmIcon">{item.batchNumber}</span>
            
          </button>
        </li>
      

</div>
          )
})
}
    </div>
  );
}
