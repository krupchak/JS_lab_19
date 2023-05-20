import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ]
        }
    }

    render() {
        let info = (<h1>1</h1>);
        let list = '';

        list = this.state.names.map((item, index) => {
            return (<li key={index}>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ]
        }
    }

	addItem() {
		this.state.names.push('пункт');
		this.setState({names: this.state.names});
	}

    render() {
        let info = (<h1>2</h1>);

        const list = this.state.names.map((item, index) => {
            return (<li key={index}>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
                <button onClick={this.addItem.bind(this)}>Додати</button>
            </div>
        );
    }
}

class Task3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ]
        }
    }

	deleteItem() {
		this.setState({names: this.state.names.slice(1)});
	}

    render() {
        let info = (<h1>3</h1>);

        const list = this.state.names.map((item, index) => {
            return (<li key={index}>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
                <button onClick={this.deleteItem.bind(this)}>Видалити</button>
            </div>
        );
    }
}

class Task4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ]
        }
    }

	deleteItem(num) {
		this.state.names.splice(num, 1);
		this.setState({names: this.state.names});
    }

    render() {
        let info = (<h1>4</h1>);

        const list = this.state.names.map((item, index) => {
            return (<li><li key={index}>{ item }</li>
            <button onClick={this.deleteItem.bind(this, index)}>Видалити</button></li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

class Task5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let info = (<h1>5</h1>);
        return (
            <div>
                { info }
                <input type="text" onChange={this.handleChange} />
                <p>
                    {this.state.value}
                </p>
            </div>
        );
    }
}

class Task6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: (event.target.value + "").toUpperCase()});
    }

    render() {
        let info = (<h1>6</h1>);
        return (
            <div>
                { info }
                <input type="text" onChange={this.handleChange} />
                <p>
                    {this.state.value}
                </p>
            </div>
        );
    }
}

class Task7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: new Date().getFullYear()};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let date = new Date().getFullYear();
        this.setState({value: date - (event.target.value)});
    }

    render() {
        let info = (<h1>7</h1>);
        return (
            <div>
                { info }
                Вік: <input type="number" onChange={this.handleChange} />
                <p>
                    Рік твого дня народження: 
                    <strong>
                        {this.state.value}
                    </strong>
                </p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            fatherName: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let str = (event.target.value + "").split(' ');
        this.setState({
            firstName: str[0],
            lastName: str[1],
            fatherName: str[2]
        });
    }

    render() {
        let info = (<h1>8</h1>);
        return (
            <div>
                { info }
                ПІП: 
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                />
                <p>
                    Прізвище:
                    <span>{this.state.firstName}</span>
                </p>
                <p>
                    Ім'я:
                    <span>{this.state.lastName}</span>
                </p>
                <p>
                    По-батькові:
                    <span>{this.state.fatherName}</span>
                </p>
            </div>
        );
    }
}

class Task9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value});
    }

    handleSubmit(event) { 
        ReactDOM
            .createRoot(document.getElementById('text'))
            .render(
                <span>
                    {this.state.value}
                </span>
            );

        event.preventDefault();
    }

    render() {
        let info = (<h1>9</h1>);
        return(
            <div>
                { info }
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <br />
                    <input type='submit' value='submit' />
                </form>
                
                <p id="text">
                </p>
            </div>
        );
    }
}

class Task10 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNum: 0,
            secondNum: 0
        };

        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
        this.handleResult = this.handleResult.bind(this);
    }

    handleChangeFirst(event) {
            this.setState({firstNum: +event.target.value})
    }

    handleChangeSecond(event) {
            this.setState({secondNum: +event.target.value});
    }

    handleResult() {
        let result = this.state.firstNum + this.state.secondNum;

        ReactDOM
            .createRoot(document.getElementById("result"))
            .render(
                <span>
                    {result}
                </span>
            );
    }

    render() {
        let info = (<h1>10</h1>);
        return(
            <div>
                { info }
                <input type='number' onChange={this.handleChangeFirst} />+
                <input type='number' onChange={this.handleChangeSecond} />=
                <span id="result">
                </span>
                <br />
                <button onClick={this.handleResult}>Calculate</button>
            </div>
        );
    }
}

class Task11 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            fatherName: ''
        };
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeFatherName = this.handleChangeFatherName.bind(this);
        this.handleShowFullName = this.handleShowFullName.bind(this);
    }


    handleChangeFirstName(event) {
        this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({lastName: event.target.value});
    }
    handleChangeFatherName(event) {
        this.setState({fatherName: event.target.value});
    }

    handleShowFullName() {
        let fullName = 
            this.state.firstName + " " +  
            this.state.lastName + " " + 
            this.state.fatherName;

        ReactDOM
            .createRoot(document.getElementById("fullName"))
            .render(
                <span>
                    {fullName}
                </span>
            );
    }

    render() {
        let info = (<h1>11</h1>);
        return(
            <div>
                { info }
                Прізвище:
                <input 
                    type="text" 
                    onChange={this.handleChangeFirstName} 
                />
                <br />
                Ім'я:
                <input 
                    type="text" 
                    onChange={this.handleChangeLastName} 
                />
                <br />
                По-батькові:
                <input 
                    type="text" 
                    onChange={this.handleChangeFatherName} 
                />
                <br /><p id="fullName"></p>
                <button onClick={this.handleShowFullName}>Показати ПІП</button>
            </div>
        );
    }
}

class Task12 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ],
            nameNew: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event) {
        this.setState({nameNew: event.target.value});
    }

	addItem() {
		this.state.names.push(this.state.nameNew);
		this.setState({names: this.state.names});
	}

    render() {
        let info = (<h1>12</h1>);
        const list = this.state.names.map((item, index) => {
            return (<li key={index}>{ item }</li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleChangeName} 
                />
                <button onClick={this.addItem.bind(this)}>Додати</button>
            </div>
        );
    }
}

class Task13 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [
                'Коля',
                'Василь',
                'Петро',
                'Іван',
                'Дмитро'
            ],
            nameNew: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event) {
        this.setState({nameNew: event.target.value});
    }

	addItem() {
		this.state.names.push(this.state.nameNew);
		this.setState({names: this.state.names});
	}

    deleteItem(num) {
		this.state.names.splice(num, 1);
		this.setState({names: this.state.names});
    }

    render() {
        let info = (<h1>13</h1>);
        const list = this.state.names.map((item, index) => {
            return (<li><li key={index}>{ item }</li>
            <button onClick={this.deleteItem.bind(this, index)}>Видалити</button></li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleChangeName} 
                />
                <button onClick={this.addItem.bind(this)}>Додати</button>
            </div>
        );
    }
}

class Task14 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hrefs: [
                {href: '1.html', text: 'посилання 1'},
                {href: '2.html', text: 'посилання 2'},
                {href: '3.html', text: 'посилання 3'},
            ],
            href: '', 
            text: '',
            hrefNew: {}
        };
        this.handleChangeHref = this.handleChangeHref.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeHref(event) {
        this.setState({href: event.target.value});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }
    
    addItem() {
		this.state.hrefs.push(this.state.hrefNew = {href: this.state.href, text: this.state.text});
		this.setState({hrefs: this.state.hrefs});
	}

    render() {
        let info = (<h1>14</h1>);
        let list = '';

        list = this.state.hrefs.map((item, index) => {
            return (<li key={index}><a href={item.href}>
                {item.text}
            </a></li>)
        });

        return (
            <div>
                { info }
                <ul>
                    { list }
                </ul>
                <input 
                    type="text"
                    onChange={this.handleChangeHref} 
                />
                <input 
                    type="text" 
                    onChange={this.handleChangeText} 
                />
                <button onClick={this.addItem.bind(this)}>Додати</button>
            </div>
        );
    }
}

class Task15 extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        users: [
            {name: 'Коля', age: 30},
            {name: 'Василь', age: 40},
            {name: 'Петро', age: 50},
        ],
        name: '',
        age: 0,
        user: {}
    };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
}

    handleChangeName(event){
        this.setState({name: event.target.value});
    }

    handleChangeAge(event){
        this.setState({age: event.target.value});
    }
    
    addItem() {
		this.state.users.push(this.state.user = {name: this.state.name, age: this.state.age});
		this.setState({users: this.state.users});
	}

    render() {
        let info = (<h1>15</h1>);
        let table = '';

        table = this.state.users.map((item, index) => {
            return (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>)
        });

        return (
            <div>
                { info }
                <table>
                    { table }
                </table>
                <input 
                    type="text"
                    onChange={this.handleChangeName} 
                />
                <input 
                    type="number" 
                    onChange={this.handleChangeAge} 
                />
                <button onClick={this.addItem.bind(this)}>Додати</button>
            </div>
        );
    }
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
            <Task9 />
            <Task10 />
            <Task11 />
            <Task12 />
            <Task13 />
            <Task14 />
            <Task15 />
        </div>
    );