webpackJsonp([11,12],{2031:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(498),s=n(271),c=n(1437),o=n(1400),r=n(121),h=function(e){return{isFetchingMe:c.a.State.isFetchingMe(e)}},a=n.i(o.a)("fetchMe","fetchConnectEnrollment","fetchApplications"),p=n.i(i.b)(h,a)(e.createClass({displayName:"me/container",propTypes:{isFetchingMe:e.PropTypes.bool.isRequired,fetchMe:e.PropTypes.func.isRequired,fetchConnectEnrollment:e.PropTypes.func.isRequired,fetchApplications:e.PropTypes.func.isRequired},getInitialState:function(){return{hasFetched:!1}},componentWillMount:function(){this.props.fetchMe(),this.props.fetchConnectEnrollment(),this.props.fetchApplications(),this._setHasFetched(!1)},componentWillReceiveProps:function(e){this.state.hasFetched||e.isFetchingMe||this._setHasFetched(!0)},_setHasFetched:function(e){this.setState({hasFetched:e})},render:function(){var t=this.state.hasFetched;return e.createElement(s.b,{isBusy:!t},e.createElement(s.b.Header,{title:n.i(r.b)("Home")}),e.createElement(s.b.Body,null,t?this.props.children:null))}}));t.default=p}).call(t,n(0))}});