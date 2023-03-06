class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 className="color-highlight">
                Welcome to the world of React!
                </h2>
            </div>
        );
    }
}

class MyFruitList extends React.Component {
    render() {
            const orange_str = "Orange";
            const apple_str = "Apple";
            const banana_str = "Banana";
            const fruit_img = "images/fruits.jpg";
            const image_el = <img src={fruit_img}/>;
            var items = ["Jackfruit", "Apple", "Banana", "Grapes", "Orange", "Mango", "Guava", "Kiwi"];
            var item = items[Math.floor(Math.random() * items.length)];
            return (
            <div>
                <div id="el-key">My favourite fruits:</div>
                <ul>
                    <li key="O-key">{orange_str}</li>
                    <li key="A-key">{apple_str}</li>
                    <li key="B-key">{banana_str}</li>
                    <li key="N-key" className="my-fruits">{item}</li>
                    </ul>
                    {image_el}
            </div>
            );
        }
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById("my-first-component"));

function on_tick() {
    ReactDOM.render(<MyFruitList/>, document.getElementById("my-fruit-list"));
}

setInterval(on_tick, 2000);