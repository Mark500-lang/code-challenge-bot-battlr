import React, {useState, useEffect} from 'react';
import Collection from './BotCollection';

function BotArmy(){

    const [bots, setBots] = useState([]);
    const [armyRobot, setArmyRobot] = useState([])
//Fetch data from server 
    useEffect(()=>{
    fetch("http://localhost:8001/bots")
    .then((resp)=> resp.json())
    .then((data)=>setBots(data))
  }, [bots])

  const addToArmy =(id)=>{
    const robot = bots.find(robot => robot.id === id)
    const army = armyRobot.find(vet => vet.id === id)
    army ? alert("fuck") : setArmyRobot([...armyRobot, robot])
   
  }

  const removeFromArmy =(id)=>{
    const newArmy = armyRobot.filter((bot)=> bot.id !== id)
    setArmyRobot(newArmy)
  }
    return(
        <>
        <h1>"Display"</h1>
        <div className='row'>
            <div className="row row-cols-1 row-cols-md-6 g-4">
                {
                    armyRobo.map((recruit, index)=>{
                            return(
                                <div key={index} className='col-sm-2'>
                                <div onClick={removeFromArmy} className='card'>
                                    <img src={recruit.avatar_url} className="card-img-top m4 rob-img" alt="placeholder"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{recruit.name}</h5>
                                        <h6 className="card-subtitle">{recruit.bot_class}</h6>
                                        <p className="card-text">{recruit.health}</p>
                                        <p className="card-text">{recruit.damage}</p>
                                        <p className="card-text">{recruit.armor}</p>
                                    </div>
                                </div>
                                </div>                           
                            );
                        })
                }
            </div>
        </div>
        <Collection bots={bots} addToArmy={addToArmy}/>
        </>
    )
}

export default BotArmy;