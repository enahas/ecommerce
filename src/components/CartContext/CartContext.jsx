import React, { useEffect, useState } from "react";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount'

const Context=React.createContext()

export function UserContext({children}){
    const[serviciosGuardados, setServiciosGuardados] = useState([])

    // useEffect(()=>{
    //     guardarServicios()
    // }, [])
    
    const guardarServicios = (serviciosVenta, value) => {
        const found = serviciosGuardados.find(element => 
            element.Nombre === serviciosVenta.name
            // console.log(element.Nombre, serviciosVenta.name)
        )
        console.log(found)
        if (!found){
            setServiciosGuardados([...serviciosGuardados,{'Nombre':serviciosVenta.name, 'Precio':serviciosVenta.price, 'Cantidad':value}])
        }
        else{return}     
    }

    return(
        <Context.Provider value={{ serviciosGuardados, guardarServicios }}>
            {children}
        </Context.Provider>
    )
}

export default Context