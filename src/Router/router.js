import React,{Component} from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"
import ComponentFooter from '../Footer/footer'
import ComponentBanner from '../Home/banner'
// import fetch from '../http'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerList: []
        }
    }
    componentDidMount(){
        this.loadlists()
    }
    loadlists () {
        fetch('/mock/mock.json')
        .then(res => res.json())
        .then(res => {
            setTimeout(() => {
                this.setState({
                    bannerList : res.results.homeBanner
                })
            }, 2000)
        })
        .catch(err => {
            console.log("请求报错")
        })
    }
    render () {
        return (
            <div className="App-session">
                <ComponentBanner bannerList={this.state.bannerList}/>
            </div>
        )
    }
}

const RouterList = () => (
    <Router className="main">
        <div className="main">
            <ComponentFooter/>
            <Route exact path="/" component={Home}></Route>
        </div>
    </Router>
    )

export default RouterList
