import React, { Component } from 'react';
import { Button } from 'antd-mobile';
const F2 = require('@antv/f2');

class Video extends Component {

    componentDidMount() {
        const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 },
        ];

        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
        });

        // Step 2: 载入数据源
        chart.source(data);

        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval().position('genre*sold').color('genre');

        // Step 4: 渲染图表
        chart.render();
    }
    render() {
        return (
            <div className="Video" style={{width:'100%'}}>
                <Button type="primary">Video</Button>
                <canvas id="myChart" style={{width:'80%',height:'260px'}}></canvas>
            </div>
        );
    }
}
export default Video;
