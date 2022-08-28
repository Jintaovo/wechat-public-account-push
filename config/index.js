export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx3117631203f30eed",
    // 公众号appSecret
    appSecret: "be3d7a81756151f5e2e43c847c6ae402",
    // 模板消息id
    templateId: "t5bviyfNR5sHLQsxy-PvSbiNXl9CZIN4Xk7nOAoxca4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ozeG76Ucaq3mUWrNA6wzndlZabF4"],
     
    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "安阳",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"year": "2022", "date": "12-24", "type": 'new'},
      {"name": "你的", "year": "1999", "date": "02-11", "type": 'r'},
    ],
    // 在一起的日子，格式同上
   // loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "1999-02-11"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
