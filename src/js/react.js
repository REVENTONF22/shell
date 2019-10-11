
// 定义一个 React 构造函数
var React = (function () {
	var r = {
		Children: {},
		Component () {},
		Version: '16.9.0-rc.0'
	}
	return r;
}());

// 导出 React 对象
export default React;

// 导出 React 的 Component 方法
export var Component = React.Component;