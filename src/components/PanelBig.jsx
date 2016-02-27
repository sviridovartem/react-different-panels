var React = require('react');

var PanelBig = React.createClass({
  render:function(){
    var mainStyle = {
      fontFamily: '"Helvetica Neue"',
      fontSize: '15px',
      fontStyle: 'normal',
      fontVariant: 'normal',
    }
    var headinStyle = {
      minHeight: '200px',
    }
    var bottomStyle= {
      minHeight: '75px',
      background: '#5D5858',
      borderColor: '#5D5858',
      textAlign: 'center',
      color: 'white'
    }
    var bStyle = {
      marginBottom: '0px'
    }
    var bodyStyle = {
      paddingTop: '5%',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '5%'
    }

    if (this.props.headingColor){
      headinStyle.background = this.props.headingColor;
    }
    if (this.props.bottomColor){
      bottomStyle.background = this.props.bottomColor;
    }
    if (this.props.headingSizeCentre){
      bStyle.fontSize = 'x-large'
      bodyStyle.textAlign = 'center';
    }

    return(

      <div style={mainStyle} className="panel panel-default">
        <div style={headinStyle} className="panel-body"></div>
        <div style={bottomStyle} className="panel-footer">
          <div className="row">
            <div className="col-sm-4">
              <h2 style={{marginBottom: '0px'}}>{this.props.shotViews}</h2>
              <p style={{color: 'grey'}}>Shot Views</p>
            </div>
            <div className="col-sm-4">
              <h2 style={{marginBottom: '0px'}}>{this.props.likes}</h2>
              <p style={{color: 'grey'}}>Likes</p>
            </div>
            <div className="col-sm-4">
              <h2 style={{marginBottom: '0px'}}>{this.props.comments}</h2>
              <p style={{color: 'grey'}}>Comments</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = PanelBig;
