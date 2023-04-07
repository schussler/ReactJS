import style from './container.module.css'


// Exemplo 01 usando a props para mostrar informaçao de dentro da funçao Container que foi chamada no index.js


// export default function Container (props) {
//     return (
//         <div className={style.titulo}>

//             {props.children}

//         </div>
//     )
// }



// Exemplo 02 usando a props para mostrar informaçao de dentro da funçao Container que foi chamada no index.js utilizando o DESTRUCTOR

export default function Container ({children}) {
    return (
        <div className={style.titulo}>

            {children}

        </div>
    )
}