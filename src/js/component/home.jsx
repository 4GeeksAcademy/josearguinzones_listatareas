import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const[tarea,setTarea]=useState("");
	const[lista,setLista]=useState([]);
		function guardartarea(e){
			e.preventDefault()
			setLista([...lista,tarea]);
			setTarea("");
		}

		function eleminartarea(id){
			let actualizado=[]
			actualizado=lista.filter((item,index)=>{
				if(index!=id){
					return item;
				}
			})
			setLista(actualizado);
		}


	return (
		<div className="text-center container">
			<input className="form-control" type="text" value={tarea} onChange={(e)=>setTarea(e.target.value)}/ >
				<button className="btn btn-success" onClick={guardartarea}>
					Agregar Tarea
				</button>
			<div>
				<ul className="list-group">
					{lista.map((item,id)=>(
						<li className="list-group-item" key={id}>{item}
							<button className="btn btn-danger float-end" onClick={(e)=>eleminartarea(id)}>
								x
							</button>
						</li>
					))}
				</ul>
			</div>
			<p>
				tareas pendientes:{lista.length}
			</p>
		</div>
	);
};

export default Home;
