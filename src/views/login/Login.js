import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import $ from 'jquery'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {

    }

    onLoginClick = () => {
        const _this = this;
        $.ajax({
            type: "get",
            url: "http://apis.juhe.cn/cook/query?key=dd64a7d8a30f6bccb0589d233f2f7861&rn=5&pn=0&menu=2",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                _this.setState({
                    items: data.result.data
                });
            },
            error: function () {

            },
            beforeSend: function () {

            }
        });
    }

    render() {
        return (
            <div className="Login">
                <Button type="primary" onClick={this.onLoginClick.bind(this)}>Login</Button>
                <ul>
                    {
                        this.state.items.map(item => (
                            (<li key={item.id}>{item.title}</li>)
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default Login;
