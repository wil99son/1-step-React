//Componente Index que está sendo acessado no App.js
const Item = ({children}) => {//feito uma refatoração com o children
    return(
        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">{children}</a>//existe duas maneira de manipular uma lista {props.texto} e {props.children}
    )
}
export default Item;