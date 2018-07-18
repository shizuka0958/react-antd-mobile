import React, { Component } from 'react';
import { Button, FormCell, CellHeader, CellBody, Label, Input, CellFooter, Form } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
//import { Button} from 'antd-mobile'

class Stats extends Component {
    render() {
        return (
            <div className="Stats">
                <Button>hello wechat</Button>
                <Form>
                    {/* <div style={{background:'#eee'}}> */}
                    <FormCell vcode>
                        <CellHeader>
                            <Label>Phone</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入手机号" />
                        </CellBody>
                        <CellFooter>
                            <Button type="vcode">获取验证码</Button>
                        </CellFooter>
                    </FormCell>
                    {/* </div> */}
                </Form>
            </div>
        );
    }
}
export default Stats;

