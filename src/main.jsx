var React = require('react');
var ReactDom = require ('react-dom');
var PanelRight = require('./components/PanelRight.jsx');
var PanelTop = require('./components/PanelTop.jsx');
var PanelBig = require('./components/PanelBig.jsx')

ReactDom.render(<PanelRight titleName="New Visitors" titleCount="1.5k" headingColor="DodgerBlue"/>, document.getElementById('NewVisitor'));
ReactDom.render(<PanelRight titleName="Bonus Rate" titleCount="50%" headingColor="BlueViolet"/>, document.getElementById('BonusRate'));
ReactDom.render(<PanelRight titleName="Searchs" titleCount="28%" headingColor="Crimson"/>, document.getElementById('Searchs'));
ReactDom.render(<PanelRight titleName="Traffic" titleCount="140.5 kb" headingColor="LimeGreen"/>, document.getElementById('Traffic'));

ReactDom.render(<PanelTop titleNumber="20" titleDescription="New followers added this month" />, document.getElementById('NewFollowers'));
ReactDom.render(<PanelTop titleNumber="$ 1250" titleDescription="Avarage Monthly Income" />, document.getElementById('MonthlyIncome'));
ReactDom.render(<PanelTop  titleNumber="$ 13865" titleDescription="Yearly Income Goal" />, document.getElementById('IncomeGoal'));

ReactDom.render(<PanelTop titleNumber="+15 °" titleDescription="London" headingColor="orange" headingSizeCentre />, document.getElementById('Weather'));

ReactDom.render(<PanelBig shotViews="12000" likes="12000" comments="5100" headingColor="DodgerBlue" />, document.getElementById('Blue'));
ReactDom.render(<PanelBig shotViews="15080" likes="12000" comments="5100" headingColor="Pink" />, document.getElementById('Pink'));
