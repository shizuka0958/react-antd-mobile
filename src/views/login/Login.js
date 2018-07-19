import React, { Component } from 'react'
import { connect } from "react-redux"
import { Control } from 'react-keeper'
import { Button, InputItem } from 'antd-mobile'
import $ from 'jquery'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {

    }

    onGetCodeClick = () => {
        console.log('onGetCodeClick enter');
        const _this = this;
        new Promise((resolve, rejects) => {
           
            $.ajax({
                type: "get",
                url: "http://apis.juhe.cn/cook/query?key=dd64a7d8a30f6bccb0589d233f2f7861&rn=5&pn=0&menu=2",
                dataType: "jsonp",
                success: function (data) {
                    console.log('sucess data');
                    resolve(data.result.data);
                },
                error: function () {
                    rejects('errpr')
                },
                beforeSend: function () {

                }
            });
        }).then((data)=>{
            console.log('then data');
            _this.setState({
                items: data
            });
        }).catch((err)=>{
            console.log(err);
        });
        console.log('onGetCodeClick leave');

    }

    onLoginClick = () => {
        Control.go('/app');
    }

    render() {
        return (
            <div className="Login" style={{ 'background': '#f8f8f8' }}>
                <div style={{ marginTop: '1rem' }}>
                    <InputItem type='phone' clear placeholder="请输入手机号">
                        {/* <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /> */}
                        手机号
                    </InputItem>

                    <InputItem type='number' clear placeholder="请输入短信验证码">
                        验证码
                    </InputItem>

                </div>

                <div id='login-btn-group' >
                    <Button className='btn' type='primary' onClick={this.onGetCodeClick.bind(this)}>获取验证码</Button>
                    <Button className='btn' type='primary' onClick={this.onLoginClick.bind(this)}>立即登录</Button>
                </div>



                <div style={{ marginTop: '3rem' }}>
                    <div>以下是测试数据</div>
                    <div>user is {this.props.user}</div>
                    <div> shop is {this.props.shop}</div>
                    <ul>
                        {
                            this.state.items.map(item => (
                                (<li key={item.id}>{item.title}</li>)
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        shop: state.shop
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onSetEmployeeModifyPopupInfo: (info) => { dispatch(Actions.setEmployeeModifyPopupInfo(info)); },
        // onTogglePopup: (visible, mask) => { dispatch(Actions.toggleEmployeeModifyPopup(visible, mask)) }
    };
};

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(Login);

