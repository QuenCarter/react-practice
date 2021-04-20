class App extends React.Component{
    render(){
        return(
            <div>
                <Slot symbol1="⭐️" symbol2="✔️" symbol3="😃"/>
                <Slot symbol1="⭐️" symbol2="⭐️" symbol3="⭐️"/>
                <Slot symbol1="⭐️" symbol2="😃" symbol3="😃"/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))