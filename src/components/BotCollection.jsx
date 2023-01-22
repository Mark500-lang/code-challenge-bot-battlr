import React from 'react';


function Collection({bots, addToArmy, handleDelete}){
//Setting bot classes icons
    const botTypeClasses = {
        Assault: "fa-solid fa-jet-fighter",
        Defender: "fa-solid fa-shield-halved",
        Support: "fa-solid fa-circle-plus",
        Medic: "fa-solid fa-truck-medical",
        Witch: "fa-solid fa-wand-magic-sparkles",
        Captain: "fa-solid fa-star",
    };
    return(
        <div className='row recruitField'>
            <div className="row row-cols-1 row-cols-md-8 g-4">
                    {
                        bots.map((bot)=>{
                            return(
                                <div key={bot.id} id={bot.id} bot={bot} onClick={()=>addToArmy(bot.id)} className='col-sm-2'>
                                <div className='card'>
                                    <img src={bot.avatar_url} className="card-img-top m4 rob-img" alt="placeholder"/>
                                    <div className="card-body">
                                        <div className="header">
                                            <span className='botTitle'> {bot.name }  <i className={botTypeClasses[bot.bot_class]} /></span>
                                        </div>
                                        <div className="meta text-wrap text-muted">
                                            <small>{bot.catchphrase}</small>
                                        </div>
                                        <div className="card-footer text-muted properties">
                                            <span className="card-text"><i className="fa-solid fa-heart-pulse"></i> {bot.health} </span>
                                            <span className="card-text"><i className="fa-solid fa-bolt"></i> {bot.damage} </span>
                                            <span className="card-text"><i className="fa-solid fa-shield-halved"></i> {bot.armor} </span>
                                        </div> 
                                        <div id='removeButton'>                  
                                            <button type="button" onClick={()=>handleDelete(bot)} className='btn btn-danger btn-sm'>X</button>
                                        </div>
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