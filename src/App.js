import r1 from './images/r1.png';
import r2 from './images/r2.png';
import { useRef } from 'react';
import './App.css';

function App() {

  const refValue = useRef(0)

  const increment = ( e ) => {

    e.target.innerHTML = Number( e.target.innerHTML ) + 1

 
    if(Number( e.target.innerHTML ) >= 10 ){
      e.target.innerHTML = 1
    }
       Number( e.target.innerHTML ) >= 8
    ?
      e.target.style.backgroundColor="red"
    :
       e.target.style.backgroundColor="white"


  }
  const changeImg = (e) => {
    e.target.src.includes(r1) 
    ?
      e.target.src = r2
    :
      e.target.src = r1
    
    
  }
  const product = () => {
    refValue.current.innerHTML = Number(refValue.current.innerHTML) * 7
  }
  const onChangeText = ( e ) => {
    
    refValue.current.innerHTML = e.target.value
  }

  return (
    <>
    <div ref={ refValue } onClick={ increment } className="increment">1</div>
    <button onClick={ product }>divisas</button>
    <div><img onClick={ changeImg } src={ r1 }/></div>
    <input onChange={ onChangeText }/>
    </>
  );
}

export default App;
