import React, {useState} from "react";
import ReactDOM from 'react-dom/client';



// function Button({text, className}){
//   const [cont, setCont] = useState(0);

//   function handleClick(){
//     setCont(cont + 1);
//   }
  
//   return (
//     <div>
//       <p>Contador {cont}</p>
//       <button className={className} onClick={handleClick}> {text} </button>
//     </div>
//   )
// }

// function Form(){

//   //const [nome,setNome] = useState('');
//   const [formulario, setForm] = useState({ nome: "", idade: 0});

//   const submitF = (event) => {
    
//     event.preventDefault(); // Não reinicia os estados dos elementos quando dá um submit
//   }



//   const handleChange = (event)=>{
//     event.preventDefault();
//     setForm({...formulario, [event.target.name]:event.target.value})
//     //setForm({...formulario, [event.target.id]:event.target.value})
//     console.log(formulario);
//   }

//   return(
//     <div className="Form">
//       <form onSubmit={submitF}>
//         {/* <input type="text" onChange={handleChange} value={nome}/> */}
//         <input type="text" onChange={handleChange} value={formulario.nome} name="nome" id="name"/>
//         <input type="number" onChange={handleChange} value={formulario.idade} name="idade" id="year"/>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   )
// }

// function App({children}){
//   return (
//     <div>
//       <Button className="nome" text={"AQUI"}/>
//       <Form />
//     </div>
//   )
// }


function InputSenha(){
  const [visible, setVisible] = useState(false);
  const [senha, setSenha] = useState("");

  return(
    <div>
      <label htmlFor="senha">Senha: </label>
      <input type={visible ? "text" : "password"} name="senha"/>
      <input type="checkbox" onChange={()=> setVisible(!visible)}/>
    </div>
  )
}


function App({children}){
  return (
    <div className="App">
      <form>
        <InputSenha />
        <button type="submit"> Enviar </button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import '../src/pages/defaul-react-page/index.css';
// import App from '../src/pages/defaul-react-page/App';
// import reportWebVitals from '../src/pages/defaul-react-page/reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
