const vocabularyData = [
    {
        id: 1,
        abbreviation: "ECU",
        chinese: "电子控制单元",
        fullName: "Electronic Control Unit",
        description: "车辆中控制一个或多个电气系统或子系统的嵌入式系统",
        known: false
    },
    {
        id: 2,
        abbreviation: "TCU",
        chinese: "自动变速箱控制单元",
        fullName: "Transmission Control Unit",
        description: "控制自动变速箱的电子控制单元，负责换挡控制和传动系统管理",
        known: false
    },
    {
        id: 3,
        abbreviation: "VCU",
        chinese: "整车控制器",
        fullName: "Vehicle Control Unit",
        description: "实现整车控制决策的核心电子控制单元，主要用于新能源汽车",
        known: false
    },
    {
        id: 4,
        abbreviation: "MCU",
        chinese: "电机控制单元",
        fullName: "Motor Control Unit",
        description: "汽车动力电机控制器，控制电动机的运行状态",
        known: false
    },
    {
        id: 5,
        abbreviation: "BMS",
        chinese: "电池管理系统",
        fullName: "Battery Management System",
        description: "监控和管理可充电电池的电子系统，防止过充电和过放电",
        known: false
    },
    {
        id: 6,
        abbreviation: "GCU",
        chinese: "发电机控制单元",
        fullName: "Generator Control Unit",
        description: "控制发电机的电子单元，主要用于增程式电动车",
        known: false
    },
    {
        id: 7,
        abbreviation: "OBC",
        chinese: "车载充电器",
        fullName: "On-Board Charger",
        description: "安装在电动汽车上的充电设备，具有充电保护作用",
        known: false
    },
    {
        id: 8,
        abbreviation: "DCDC",
        chinese: "直流转换器",
        fullName: "DC-DC Converter",
        description: "将高压直流电转换为低压直流电的装置",
        known: false
    },
    {
        id: 9,
        abbreviation: "EPS",
        chinese: "电子助力转向",
        fullName: "Electronic Power Steering",
        description: "依靠电机提供辅助扭矩的动力转向系统",
        known: false
    },
    {
        id: 10,
        abbreviation: "ABS",
        chinese: "防抱死制动系统",
        fullName: "Anti-lock Braking System",
        description: "防止车轮在紧急制动时抱死的安全系统",
        known: false
    },
    {
        id: 11,
        abbreviation: "ESC",
        chinese: "电子稳定控制系统",
        fullName: "Electronic Stability Control",
        description: "通过控制单个车轮的制动力来帮助驾驶员保持车辆控制的系统",
        known: false
    },
    {
        id: 12,
        abbreviation: "EPB",
        chinese: "电子驻车系统",
        fullName: "Electronic Parking Brake",
        description: "通过电子控制替代传统手刹的驻车制动系统",
        known: false
    },
    {
        id: 13,
        abbreviation: "TBOX",
        chinese: "远程信息处理控制器",
        fullName: "Telematics Box",
        description: "提供车辆远程监控、诊断和通信功能的系统",
        known: false
    },
    {
        id: 14,
        abbreviation: "DMS",
        chinese: "驾驶员监控系统",
        fullName: "Driver Monitoring System",
        description: "监测驾驶员状态，检测疲劳驾驶的系统",
        known: false
    },
    {
        id: 15,
        abbreviation: "ADAS",
        chinese: "高级驾驶辅助系统",
        fullName: "Advanced Driver Assistance System",
        description: "通过多传感器融合、定位等技术提供驾驶辅助的系统",
        known: false
    },
    {
        id: 16,
        abbreviation: "ACC",
        chinese: "自适应巡航控制",
        fullName: "Adaptive Cruise Control",
        description: "能够自动调整车速以保持与前车安全距离的系统",
        known: false
    },
    {
        id: 17,
        abbreviation: "FCW",
        chinese: "前碰撞预警系统",
        fullName: "Forward Collision Warning",
        description: "在可能发生前方碰撞时向驾驶员发出警告的系统",
        known: false
    },
    {
        id: 18,
        abbreviation: "APA",
        chinese: "自动泊车系统",
        fullName: "Auto Parking Assist",
        description: "辅助驾驶员完成泊车操作的系统",
        known: false
    },
    {
        id: 19,
        abbreviation: "BSD",
        chinese: "盲区检测系统",
        fullName: "Blind Spot Detection",
        description: "监测车辆盲区并在有车辆时提醒驾驶员的系统",
        known: false
    },
    {
        id: 20,
        abbreviation: "AEB",
        chinese: "自动紧急制动",
        fullName: "Autonomous Emergency Braking",
        description: "在紧急情况下自动施加制动力以避免或减轻碰撞的系统",
        known: false
    },
    {
        id: 21,
        abbreviation: "C-V2X",
        chinese: "蜂窝车联网",
        fullName: "Cellular-Vehicle to Everything",
        description: "基于蜂窝网络的车辆与外界通信技术",
        known: false
    },
    {
        id: 22,
        abbreviation: "BCM",
        chinese: "车身控制模块",
        fullName: "Body Control Module",
        description: "控制车身电子系统的模块，如灯光、门锁等",
        known: false
    },
    {
        id: 23,
        abbreviation: "CAN",
        chinese: "控制器局域网络",
        fullName: "Controller Area Network",
        description: "一种用于车辆内部设备通信的总线标准，使用双绞线传输",
        known: false
    },
    {
        id: 24,
        abbreviation: "LIN",
        chinese: "局部互联网络",
        fullName: "Local Interconnect Network",
        description: "一种低成本的车载网络协议，通常用于非关键系统，单线传输",
        known: false
    },
    {
        id: 25,
        abbreviation: "CAN-FD",
        chinese: "灵活数据速率CAN",
        fullName: "CAN with Flexible Data-Rate",
        description: "比传统CAN网络传输功能更强大的通信协议",
        known: false
    },
    {
        id: 26,
        abbreviation: "AVAS",
        chinese: "低速报警器",
        fullName: "Acoustic Vehicle Alerting System",
        description: "电动车低速行驶时发出声音提醒行人的系统",
        known: false
    },
    {
        id: 27,
        abbreviation: "ACU",
        chinese: "安全气囊控制单元",
        fullName: "Airbag Control Unit",
        description: "控制安全气囊展开的电子控制单元",
        known: false
    },
    {
        id: 28,
        abbreviation: "AVM",
        chinese: "全景影像模块",
        fullName: "All View Module",
        description: "提供车辆周围360度视图的系统",
        known: false
    },
    {
        id: 29,
        abbreviation: "HUD",
        chinese: "抬头显示",
        fullName: "Head Up Display",
        description: "将信息投射到驾驶员视线前方的显示系统",
        known: false
    },
    {
        id: 30,
        abbreviation: "PEPS",
        chinese: "无钥匙进入及启动系统",
        fullName: "Passive Entry Passive Start",
        description: "允许驾驶员在不使用物理钥匙的情况下进入和启动车辆的系统",
        known: false
    },
    {
        id: 31,
        abbreviation: "TPMS",
        chinese: "胎压监视系统",
        fullName: "Tire Pressure Monitor System",
        description: "监测和显示轮胎气压的系统",
        known: false
    },
    {
        id: 32,
        abbreviation: "LDW",
        chinese: "车道偏离预警",
        fullName: "Lane Departure Warning",
        description: "当车辆无意识偏离车道时提醒驾驶员的系统",
        known: false
    },
    {
        id: 33,
        abbreviation: "LKA",
        chinese: "车道保持辅助",
        fullName: "Lane Keeping Assist",
        description: "帮助车辆保持在当前车道内行驶的系统",
        known: false
    },
    {
        id: 34,
        abbreviation: "TJA",
        chinese: "交通拥堵辅助",
        fullName: "Traffic Jam Assist",
        description: "在低速交通拥堵时自动控制车辆横向和纵向运动的系统",
        known: false
    },
    {
        id: 35,
        abbreviation: "OTA",
        chinese: "空中下载技术",
        fullName: "Over The Air",
        description: "通过无线网络更新车辆软件的技术",
        known: false
    },
    {
        id: 36,
        abbreviation: "SOTA",
        chinese: "软件空中升级",
        fullName: "Software Over The Air",
        description: "通过无线网络更新车辆软件的技术",
        known: false
    },
    {
        id: 37,
        abbreviation: "FOTA",
        chinese: "固件空中升级",
        fullName: "Firmware Over The Air",
        description: "通过无线网络更新车辆固件的技术",
        known: false
    },
    {
        id: 38,
        abbreviation: "HIL",
        chinese: "硬件在环测试",
        fullName: "Hardware-in-the-Loop",
        description: "一种测试方法，将实际硬件与虚拟环境连接进行测试",
        known: false
    },
    {
        id: 39,
        abbreviation: "SIL",
        chinese: "软件在环测试",
        fullName: "Software-in-the-Loop",
        description: "在模拟环境中测试软件而不使用实际硬件的方法",
        known: false
    },
    {
        id: 40,
        abbreviation: "MIL",
        chinese: "模型在环测试",
        fullName: "Model-in-the-Loop",
        description: "在模拟环境中测试控制系统模型的方法",
        known: false
    }
];