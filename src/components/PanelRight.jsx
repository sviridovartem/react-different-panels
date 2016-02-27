var React = require('react');

var PanelRight=React.createClass({
  render:function(){
    var headingStyle = {
      minHeight: '80px'
    }
    var divStyle={
      fontFamily: '"Helvetica Neue"',
      fontSize: '20px',
      fontStyle: 'normal',
      fontVariant: 'normal',
      color: 'white',
    }

    if (this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }
    return(

      <div style={{minHeight: '150px', minWidth: '175px'}} className="panel panel-default">
        <div style={headingStyle} className="panel-heading">
          <div style={divStyle} className="panel-title">
            <p style = {{marginBottom: '0px'}}>{this.props.titleName}</p>
            <b>{this.props.titleCount}</b>
          </div>
        </div>
        <div className="panel-body"></div>
      </div>
    );
  }
});
module.exports = PanelRight;
