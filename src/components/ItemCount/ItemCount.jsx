import './ItemCount.css';
import { Card, Button, Icon} from 'semantic-ui-react';
import { useState } from 'react';

const ItemCount = (props) =>{
    const [count, setCount] = useState(0);
    let incrementCounter = () => {
        if(count>=props.stock) {
            setCount(props.stock);
        } else {
            setCount(count + 1);
        }
    }
    let decrementCounter = () => {
        if(count<=0){
            setCount(0);
        } else{
            setCount(count - 1);
        }        
    }
    
    return(
        <Card className="card">
            <Card.Content>
                <Card.Header>PRODUCTO 1</Card.Header>
                <h2>{count}</h2>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='red' onClick={decrementCounter}><Icon name="minus" /></Button>
                    <Button basic color='green' onClick={incrementCounter}><Icon name="plus" /></Button>
                </div>
            </Card.Content>
        </Card> 

    )
}
export default ItemCount