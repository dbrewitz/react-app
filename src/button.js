import React from 'react';

var MyButton = React.createClass({
    handleClick: function(e){
       // alert('hi')
       console.log(e)
     //  e.className.add('yo')
    },
    render: function () {
            var myClass = "myButton"
        return ( 
            <button className={myClass} onClick={this.handleClick}> My Button </button>
        )
    }
})
module.exports = MyButton
