/*function Btn(){
    const clickHandler = () => console.log('c')
    return(
        <button onClick={clickHandler}>
        Click Me
        </button>
    );
}

export default Btn;*/ 

function Btn(){
    const clickHandler = () => console.log('mouse over')
    return(
        <button onMouseOver={clickHandler}>
        Click Me
        </button>
    );
}

export default Btn;