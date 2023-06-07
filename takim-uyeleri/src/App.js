import './App.css';
import {useState} from "react";
import Form from './components/Form';

function App() {

const uyeler = [
  {
    firstname: "Ali",
    surname: "Can",
    email: "alican@gmail.com",
    old: "20",
    id:1
  },
  {
    firstname: "Mehmet",
    surname: "Kemal",
    email: "mehmetkemal@gmail.com",
    old: "23",
    id: 2
  }
]

const [takimUyeleri, setTakimUyeleri] = useState(uyeler);
  const [uye, setUye] = useState({
    firstname: "",
    surname: "",
    email: "",
    old: ""
  });

const handlerSubmit =(e)=>{
  e.preventDefault();
  if(uye.id){
    setTakimUyeleri(takimUyeleri.map((item)=>{
      if(uye.id==item.id){
        const yeniObj = {
          firstname: uye.firstname,
          surname: uye.surname,
          email: uye.email,
          old: uye.old,
          id: uye.id
        }
        return yeniObj;
      }else{
        return item;
      }
    }))
  }else{
    const yeniUye = {
    ...uye,
    id: takimUyeleri.length+1
    }
    setTakimUyeleri([...takimUyeleri,yeniUye]);
  }
  

  setUye({
    firstname: "",
    surname: "",
    email: "",
    old: ""
  })
}

const changeHandler =(e)=>{
  const {name, value} = e.target;
  setUye({
    ...uye,
    [name]: value
  })
}

const changeContent = (id) =>{
 id = id-1;
 setUye({
    firstname: takimUyeleri[id].firstname,
    surname: takimUyeleri[id].surname,
    email: takimUyeleri[id].email,
    old: takimUyeleri[id].old,
    id: id+1
 })
}

  return (
    <div className="App">
       <Form uye={uye} handlerSubmit={handlerSubmit} changeHandler={changeHandler}/>
       <br/>
       <hr/>
      {
        takimUyeleri.map((takimUyesi)=>(
        <div key={takimUyesi.id}>
          <p>firstname: {takimUyesi.firstname}</p>
          <p>surname: {takimUyesi.surname}</p>
          <p>email: {takimUyesi.email}</p>
          <p>old: {takimUyesi.old}</p>
          <button onClick={()=>(changeContent(takimUyesi.id))}>Düzenle</button>
          <br/>
          <hr/>
        </div>
        ))
      }
     
     
    </div>
  );
}

export default App;
