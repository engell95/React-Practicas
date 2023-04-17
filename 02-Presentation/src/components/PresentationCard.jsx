import avatar from '../assets/avatar.png';

function PresentationCard(){
    let name = "Engell";
    return(
    <div className="presentation-card">
        <img src={avatar} alt="Avatar" className='Avatar'/>
        <h1>Hola soy, {name}</h1>
    </div>);
};

export {PresentationCard};