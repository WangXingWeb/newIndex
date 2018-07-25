//用户信息及写作时间组件
Vue.component('wx-userinfo', {
    data: function () {
        return {
            user: {
                attributes:{
                    username:"",
                    headImg:''
                }
            },
            createdTime:''
        }
    },
    props:['userid','created'],
    watch:{
        userid:function (newVal,oldVal) {
            var _this=this;
            mainBmob.getSingleData('_User',newVal).then(function (data) {
                console.log(data);
                if(data.code==200){
                    _this.user=data.result;
                }else{
                    _this.$messagebox('获取数据错误', '请确认您的网络是否通畅');
                }
            });
        },
        created:function (newVal,oldVal) {
            this.createdTime=dateFormat(newVal,'yyyy.MM.dd hh:mm');
        }
    },
    template:
    '<div class="userInfo">'+
    '<div class="headImg-container">'+
    '<img class="headImg" style="" :src="user.attributes.headImg" alt="">'+
    '</div>'+
    '<div class="userInfo-content"><div class="author-name">作者：{{ user.attributes.username }}</div>'+
    '<div class="created-time">发表于：{{ createdTime }}</div></div>'+
    '<mt-button class="attention " size="small">+ 关注</mt-button></div>',
    methods:{

    }
});
