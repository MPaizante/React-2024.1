/*function Btn(){
    const clickHandler = () => console.log('CLICKED')
    return(
        <button onClick={clickHandler}>
        Click Me
        </button>
    );
}

export default Btn;*/ 

function Btn(){
    function thirdExample() {
        console.log('third example'); };
    const clickHandler = () => console.log('mouse over');
    const clickHandler2 = () => console.log('CLICKED');
    return(
        <div>
            <button onMouseOver={clickHandler}>
            Click Me
            </button>
            <br/>
            <br/>
            <button onClick={() => console.log('second example')}>
                An inline anonymous ES6 function event handler
            </button>
            <br/>
            <br/>
            <button onClick={thirdExample}>
                 using a separate function declaration
            </button>
            <br/>
            <br/>

            <button onClick={clickHandler2}>
               Click Me
            </button>
        </div>


    );
}

export default Btn;