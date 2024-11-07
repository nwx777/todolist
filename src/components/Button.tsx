type ButtonProps = {
    title: string
}


export const Button = (props:ButtonProps) =>{
    return (
       <button title={1}>{props.title}</button>
       <button title={2}>{props.title}</button>
       <button title={3}>{props.title}</button>

    );
}
