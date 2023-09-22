import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';



const Reloj = () => {

    const reloj = useRef(null)

    useEffect(() => {
        reloj.current.textContent = CalcularHora();
        let myInterval = setInterval(() => {
          reloj.current.textContent = CalcularHora();
        }, 1000);
      
        return () => {
          // En este bloque de retorno, puedes limpiar el intervalo
          clearInterval(myInterval);
        };
      }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que el efecto se ejecute solo una vez

    const CalcularHora = ()=>{
        const fechaActual = new Date();
        const hora = fechaActual.getHours();
        const minutos = fechaActual.getMinutes();
        const horaFormateada = `${hora.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
        return horaFormateada;
    }
      

    // Define un botón con estilo
    const StyledReloj = styled.p`
        color: #444;
        font-size: 98px;
        font-family: 'Archivo Black', sans-serif;
        opacity: 0.9;
        transition: opacity 0.2s linear;
        cursor: pointer; 

        &:hover {
            /*background-color: #0056b3;*/
        }
    `;

    return (<>
        <StyledReloj  ref={reloj} id="hora"></StyledReloj>
    </>)

}

export default Reloj