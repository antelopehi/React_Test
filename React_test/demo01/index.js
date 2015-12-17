var Hello = React.createClass({
  render: function() {
    return ( <div>
      Hello World!
      < /div>
    )
  }
});

React.render(
  <Hello /> ,
  document.getElementById("content")//取的DOC 元素
)
