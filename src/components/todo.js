import React, {useState} from 'react'
import LIST from './lists';
import './components.css';



const TODO = () => {
   
    const [value,setValue] = useState('');
    const [put,setPut] = useState(false);
    const [content, setContent] = useState([])
    const handleChange = event => {

        setValue(event.target.value);

    }

    const putList = (event) => {


        if(!event) 
            event = window.event;

        let key = event.keyCode || event.which;
        if(key === 13 || key == '13'){
            if(value === '' || value === null){
                alert('Please insert value');
                setPut(false);
            }else{

                if(value.length >= 60){
                    alert('Looks like your input is too long');
                    setPut(false);
                    setValue('');
                }else{
                    
                    setPut(true);
                    setContent([...content,
                        { content: value,
                        id: content.length + 1 }
                    ])
                    setValue('');
                }

        }
        }
        

    }

    return(
        <React.Fragment>
        <div className="input-text">
            <input type="text" placeholder="insert todo" id="input-todo" onChange={handleChange} value={value} onKeyPress={putList}/>
        </div>
        <div className="list-container">
            <div className="lists">
                <ul className="u-lists">
                  <LIST {...content} />
                </ul>
            </div>
        </div>    
        </React.Fragment>
    );

}


export default TODO;



