import React, {useState, useEffect} from 'react';
import Collection from './BotCollection';

function BotArmy(){

    //Setting bot classes icons
    const botTypeClasses = {
        Assault: "fa-solid fa-jet-fighter",
        Defender: "fa-solid fa-shield-halved",
        Support: "fa-solid fa-circle-plus",
        Medic: "fa-solid fa-truck-medical",
        Witch: "fa-solid fa-wand-magic-sparkles",
        Captain: "fa-solid fa-star",
    };

    const [bots, setBots] = useState([]);
    const [armyRobot, setArmyRobot] = useState([]);

//Fetch data from server 
    useEffect(()=>{
    fetch("http://localhost:8001/bots")
    .then((resp)=> resp.json())
    .then((data)=>setBots(data))
  }, [])

//DELETE request
function handleDelete(id){
    fetch("http://localhost:8001/bots/`${id}`", {
        method: "DELETE"
    })
}
//Adding robot to army field
  const addToArmy =(id)=>{
    const bot = bots.find(bot => bot.id === id)
    const army = armyRobot.find(bot => bot.id === id)
    army? alert("Exists") : setArmyRobot([...armyRobot, bot])
    console.log(army)
  }
  
//Removing robot from army field
  const removeFromArmy =(id)=>{
    const newArmy = armyRobot.filter((bot)=> bot.id !== id)
    setArmyRobot(newArmy)
  }
    return(
        <>
        <div className='row displayField'>
            <div className="row row-cols-1 row-cols-md-6 g-4">
                {
                    armyRobot.map((bot)=>{
                        return(
                            <div key={bot.id} onClick={()=>removeFromArmy(bot.id)} className='col-sm-2'>
                                <div className='card'>
                                    <img src={bot.avatar_url} className="card-img-top m4 rob-img" alt="placeholder"/>
                                    <div className="card-body">
                                        <div className="header">
                                            <span className='botTitle'> {bot.name }  <i className={botTypeClasses[bot.bot_class]} /></span>
                                        </div>
                                        <div className="meta text-wrap">
                                            <small>{bot.catchphrase}</small>
                                        </div>
                                        <div className="card-footer text-muted properties">
                                            <span className="card-text"><i className="fa-solid fa-heart-pulse"></i> {bot.health} </span>
                                            <span className="card-text"><i class="fa-solid fa-bolt"></i> {bot.damage} </span>
                                            <span className="card-text"><i class="fa-solid fa-shield-halved"></i> {bot.armor} </span>
                                        </div> 
                                        <div id='removeButton'>
                                            <button type="button" onClick={()=>handleDelete(bot.id)} className='btn btn-danger btn-sm'>X</button>
                                        </div>                                                         
                                    </div>
                                </div>
                            </div>                           
                        );
                    })
                }
            </div>
        </div>
        <Collection bots={bots} addToArmy={addToArmy} handleDelete={handleDelete}/> 
        </>
    )
}

export default BotArmy;