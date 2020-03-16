/*global ReactDOM*/

function SuccessMessage(props) {
  return(
    <div className="success-message">{props.messageText}</div>
    );
}


function WarningMessage(props) {
  return(
    <div className="warning-message">{props.messageText}</div>
    );
}


function InfoMessage(props) {
  return(
    <div className="info-message">{props.messageText}</div>
    );
}



function ErrorMessage(props) {
  return(
    <div className="error-message">{props.messageText}</div>
    );
}



function AlertMessage(props) {
  const MessageType = props.message.messageType;
  return(
    <div className="wrapper">
      <MessageType messageText={props.message.messageText}/>
    </div>
  );
}


const message = {
  messageType : InfoMessage,
  messageText : "Info Message",
};



ReactDOM.render(<AlertMessage message={message}/>, document.getElementById("root"));




function StandardImageView(props) {
  return(
    <div>
    <img className="standard-image-view" src={props.imageSource}/>
    </div>
    );
}

function RoundedCornersImageView(props) {
  return(
    <div>
    <img  className="rounded-corners-image-view" src={props.imageSource}/>
    </div>
    );
}

function CircularImageView(props) {
  return(
    <div>
    <img  className="circular-image-view" src={props.imageSource}/>
    </div>
    );
}

function ImageViews(props) {
  return(
  <div className="wrapper">
  <StandardImageView imageSource={props.imageSource}/>    
  <RoundedCornersImageView imageSource={props.imageSource}/>
  <CircularImageView imageSource={props.imageSource}/>
  </div>
  );
}



const url = "./assets/koru-sprial-shape.jpg";


ReactDOM.render(<ImageViews imageSource={url}/>, document.getElementById("root"));




  
  function Strikethrough(props) {
    return(
      <div className="strike-through">
      <p>{props.text.str}</p></div>
      );
  }
  
    const string = {
      str : "KrishnaVamsi",
    };

ReactDOM.render(<Strikethrough text={string}/>, document.getElementById("root"));

