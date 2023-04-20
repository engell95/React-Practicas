import { useState ,useEffect, Fragment} from "react";

function Timer(){
    let [TargetSecond,SetTargetSecond] = useState(null);
    let [TargetTime,SetTargetTime] = useState(0);

    useEffect(function(){
        
        if(TargetSecond === null) return;

        SetTargetTime(0);

        let interval = setInterval(function(){
            SetTargetTime((TargetTime)=>TargetTime + 1);
        },1000);

        return ()=>{
            clearInterval(interval);
        };
    },[TargetSecond]);

    function initTimer(ev){
        ev.preventDefault();
        let second = ev.target.second.value;
        SetTargetSecond(parseInt(second));
    }

    if(TargetSecond <= TargetTime && TargetSecond !== null){
        return(<Fragment>
                <p>Process finish</p>
                <button onClick={()=> SetTargetSecond(null)}>Restar</button>
            </Fragment>);
    }
    
    if(TargetSecond !== null){
        return(<p>i'm an accountant up {TargetTime}</p>);
    }

    return(
        <div className="Card-Timer">
            <p>How many minutes do you want to count?</p>
            <form action="" onSubmit={ ev => initTimer(ev)}>
                <input type="number" name="second"/>
                <button type="submint">Start</button>
            </form>
        </div>);
}

export {Timer};