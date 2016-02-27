var React = require('react');

var PanelTop = React.createClass({
  render:function(){
    var headingStyle = {
      minHeight: '150px',
      minWidth: '175px',
      fontFamily: '"Helvetica Neue"',
      fontSize: '15px',
      fontStyle: 'normal',
      fontVariant: 'normal',
    }
    var bodyStyle = {
      paddingTop: '20%',
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingBottom: '20%'
    }
    var bStyle = {
      marginBottom: '0px'
    }
    var descTitle = {}

    if (this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }
    if (this.props.headingSizeCentre){
      bStyle.fontSize = 'x-large';
      bodyStyle.textAlign = 'center';
      bStyle.color = 'white';
      descTitle.color = 'white';
    }

    return(
      <div style={headingStyle} className="panel panel-default">
        <div style = {bodyStyle} className="panel-body">
          <b style = {bStyle}>{this.props.titleNumber}</b>
          <p style = {descTitle}>{this.props.titleDescription}</p>
        </div>
      </div>
    );
  }
});
module.exports = PanelTop;
