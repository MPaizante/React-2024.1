function Header(props) {
    const style = {
        color:'lightblue',
    }
    return (
        <div>
            <h1 style={style}>Hello, {props.name}</h1>
            <p>Header content here</p>
        </div>
    );
};

export default Header;