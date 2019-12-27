import React ,{useState} from 'react'
import './components.css'
import { element } from 'prop-types';


const LIST = (props) => {

    const [pager, setPager] = useState(false);

    const menuClick = (event) => {
        event.preventDefault();
        let classNameOfToolTips = document.querySelector(`.tool-${event.target.id}`);
        let tool = document.querySelectorAll('.tool-tips');
        classNameOfToolTips.classList.toggle('hide'); 
    }

    const deleteList = (event) => {
        event.preventDefault();
        let classNameOfToolTips = document.querySelector(`.${event.target.id}`);
        classNameOfToolTips.classList.add('hide');

    }      
    
    const markList = (event) => {

        event.preventDefault();
        let classNameOfToolTips = document.querySelector(`.${event.target.id}`);
        let el = `.tool-${event.target.id.split('-')[1]}`;
        classNameOfToolTips.classList.toggle('mark');
        document.querySelector(el).classList.add('hide');
        
    }

    return(
        <div>
            {
                Object.keys(props).map((el,key) => {
                
              

                        return (
                        <div>
                            <li className={`list delete-${props[key].id} mark-${props[key].id}`} key={props[key].id}>
                              
                                <p className="list-content">{props[key].content}</p>
                                
                                    <span className="list-menu" id={props[key].id} onClick={menuClick} value={props[key].id}>

                                    </span>
                                    <div className={`tool-tips tool-${props[key].id} hide`} >
                                        <ul className="tool-lists">
                                            <li className="tool-list" id={`mark-${props[key].id}`} onClick={markList}>Mark</li>
                                            <li className="tool-list" id={`delete-${props[key].id}`} onClick={deleteList}>Delete</li>    
                                        </ul>
                                    </div>
                                
                            </li>
                        </div>);
             
                        
           
            })
            }
            <div className="clickable-menu">
                <ul className="clickable-list"></ul>
            </div>
        </div>

    );

}

export default LIST;

