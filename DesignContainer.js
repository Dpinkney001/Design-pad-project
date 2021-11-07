import React from 'react';
//import ReactDOM from 'react-dom';
import 'C:/Users/thees/OneDrive/Desktop/design-pad/src/components/designContainer.css';
import 'C:/Users/thees/OneDrive/Desktop/design-pad/src/components/padInput.css';
import 'C:/Users/thees/OneDrive/Desktop/design-pad/src/components/2sac4x01.jpg';

class DesignContainer extends React.Component{
    constructor(props){
        super(props);
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
        event.dataTransfer.setData("text", props.target.id);
        }

        function drop(event) {
        event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

        

    }

    render(){
        return (
            <div className="container">
                <header>
                <h1>Design Pad</h1> 
                
                <button classname="editbutton" onclick="{drag}">Edit</button>
            
                </header>
                
                <body classname="pad">
                    <div class="divbox">
                    <div class="container">
                    <div class="one" ondrop="drop(event)" ondragover="allowDrop(event)" width="500px" height="500px">                  One</div>
                    <div class="two" ondrop="drop(event)" ondragover="allowDrop(event)" width="500px" height="500px">                  Two</div>
                    <div class="three" ondrop="drop(event)" ondragover="allowDrop(event)" width="500px" height="500px">              Three</div>
                    <div class="four" ondrop="drop(event)" ondragover="allowDrop(event)" width="500px" height="500px">                Four</div>
                    </div>
                </div>
                <div classname="colorpad">
                    <div class="red" draggable="true" onDrag="{drag}">Red</div>
                    <div class="green" draggable="true" onDrag="{drag}">Green</div>
                    <div class="yellow" draggable="true"  onDrag="{drag}">Yellow</div>
                    <div class="orange" draggable="true" onDrag="{drag}">Orange</div>
                    <div class="black" draggable="true" onDrag="{drag}">Black</div>
                    <div class="white" draggable="true" onDrag="{drag}">White</div>
                    <div class="purple" draggable="true" onDrag="{drag}">Purple</div>
                    <div class="brown" draggable="true" onDrag="{drag}">Brown</div>
                    
                </div>

                
                </body>
            </div>
        )
    }
}

export default DesignContainer;