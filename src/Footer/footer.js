import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './footer.css'

const ComponentFooter = () => {
    return (<div className="App-footer">
        <Link to="/">
            <dl>
                <dt></dt>
                <dd>首页</dd>
            </dl>
        </Link>
        <Link to="/manageMatters">
            <dl>
                <dt></dt>
                <dd>理财</dd>
            </dl>
        </Link>
        <Link to="/manageMatters">
            <dl>
                <dt></dt>
                <dd>白条</dd>
            </dl>
        </Link>
        <Link to="/crowdFunding">
            <dl>
                <dt></dt>
                <dd>奥运会</dd>
            </dl>
        </Link>
        <Link to="/personalCenter">
            <dl>
                <dt></dt>
                <dd>我的</dd>
            </dl>
        </Link>
    </div>
    )
}

export default ComponentFooter