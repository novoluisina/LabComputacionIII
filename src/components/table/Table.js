import React from 'react'
import "./Table.css"

const Table = ({netIncomes,average}) => {
  return (
    <div className="table-container">
      <p><b>Ejercicio obligatorio 2</b></p>
        <table>
          <thead>
            <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
            </tr>
          </thead>
          <tbody>
            {netIncomes.map((incomeData)=>
            (
              <tr>
                <td>{incomeData.brand}</td>
                <td>{incomeData.income}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
        <br/>
        <div>
          <p>Promedio de ingresos: {average.toFixed(2)}</p>
        </div>
        
    </div>
  )
}

export default Table