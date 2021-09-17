import React from "react";
import DqBlock from "./components/DqBlock";
import PlayingBlock from "./components/PlayingBlock";
import StandbyBlock from "./components/StandbyBlock";


function App () {

  return (
    <>      
    <div class="row">
      <div class="column">
        <StandbyBlock />
      </div>

      <div class="column">
        <PlayingBlock />
      </div>

      <div class="column">
        <DqBlock />
      </div>
    </div>`
    
      <DqBlock />
      <PlayingBlock />
      <StandbyBlock />
    </>
  )
}

export default App;
