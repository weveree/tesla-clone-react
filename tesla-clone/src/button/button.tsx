import { Dispatch, SetStateAction } from "react";

interface MyComponentProps {
    text: string;
    ba: Dispatch<SetStateAction<boolean>>;
    linkTo?:string
  }

const Button: React.FC<MyComponentProps> = ({ text,linkTo,ba }) => {

    function ShowMenu(){
        ba(true);
    }
    return(
        <li onMouseEnter={()=>ShowMenu()} onMouseLeave={()=>ba(false)} >
            <a href={linkTo}>{text}</a>
        </li>
    )
}

export default Button