import React, {useState, useEffect} from 'react';

function Collection({bots, addToArmy}){

    return(
        <div className='row'>
            <div className="row row-cols-1 row-cols-md-6 g-4">
                    {
                        bots.map((bot, index)=>{
                            return(
                                <div key={index} onClick={addToArmy()} className='col-sm-2'>
                                <div className='card'>
                                    <img src={bot.avatar_url} className="card-img-top m4 rob-img" alt="placeholder"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{bot.name}</h5>
                                        <h6 className="card-subtitle">{bot.bot_class}</h6>
                                        <p className="card-text">{bot.health}</p>
                                        <p className="card-text">{bot.damage}</p>
                                        <p className="card-text">{bot.armor}</p>
                                    </div>
                                </div>
                                </div>                           
                            );
                        })
                    }
            </div> 
        </div>
    )
}

export default Collection;