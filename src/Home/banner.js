import React from "react"
import './banner.css'
import createReactClass  from 'create-react-class'

const ComponentBanner = createReactClass({
    getInitialState: function(){
        return{
            bannerList:[]
        }
    },
    render () {
        const { bannerList } = this.props
        return (
            <div className="swiper-wrapper">
            {
                bannerList.map((item,index) =>
                    <div key={ index }  className="swiper">
                        <img src = {item}/>
                    </div>
                )
            }
            </div>
        )
    }
})
export default ComponentBanner