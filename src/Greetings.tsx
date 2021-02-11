import React from 'react';

interface GreetingsProps{
    name:string;
    mark:string;
    optional?:string;
    onClick: (name: string) => void // return void
}

const Greetings = ({name, mark, optional, onClick}: GreetingsProps) => {
    const handleClick = () => onClick(name);

    return (
        <>
            <div>hello, {name}, {mark}</div>
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </>
    )
};

Greetings.defaultProps ={
    mark: 'defualt'
};

export default Greetings;

