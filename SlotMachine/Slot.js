class Slot extends React.Component{
    render(){
      const {symbol1, symbol2, symbol3} = this.props;
      const isWinner = (symbol1 === symbol2) && (symbol2 === symbol3)
      return(
        <div>
            {isWinner ? 'You are the winner' : 'You are a loser'}
            <p>{symbol1} {symbol2} {symbol3}</p> 
        </div>
        
      )
    }
}