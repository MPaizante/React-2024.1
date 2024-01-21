function Main(props) {
    const style = {
        color:'lightblue',
    }
    return (
        <div>
            <h1 style={style}>Hello, {props.name}</h1>
            <p>You are in position n0.{props.num}</p>
        </div>
    );
};

export default Main;