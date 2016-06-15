var yd = angular.module('yidianapp',['ngAnimate','ngRoute']);
yd.controller('indexCtrl',['$scope',function($scope){
	$scope.dhs = [
		{name:'推荐',lianjie:'tuijian'},
		{name:'电台',lianjie:'diantai'},
		{name:'时尚',lianjie:'shishang'},
		{name:'汽车',lianjie:'qiche'},
		{name:'健康',lianjie:'jiangkang'},
		// {name:'科技',lianjie:'keji'},
		// {name:'视频',lianjie:'shipin'},
	]
	$scope.yys = [
		{name:'一点资讯',image:'./image/x1.png'},
		{name:'一点视频',image:'./image/x2.png'},
		{name:'读点历史',image:'./image/x4.png'},
		{name:'互联那点事',image:'./image/x5.png'},
		{name:'应用号',image:'./image/x3.png'},
	]
	$scope.ss=function(){

	}
}])
yd.controller('yidaoCtrl',['$scope',function($scope){}])
yd.controller('tuijianCtrl',['$scope',function($scope){
	$scope.tjs = [
		{title:'内涵段子，搞笑笑话：告诉大家一个发财的好项目',img1:'./image/tj/1.1.png',img2:'./image/tj/1.2.png',img3:'./image/tj/1.3.png',wang:'北方网',time:'1评',time2:'1分钟前'},
		{title:'死在嘴上，病在腿上看一遍年轻10岁',img1:'./image/tj/2.1.png',img2:'./image/tj/2.2.png',img3:'./image/tj/2.3.png',wang:'悦已女性网',time:'3评',time2:'1分钟前'},
		{title:'同在一个起跑线，唐婧都红到发黑了，即却空有实力无名气！',img1:'./image/tj/3.1.png',img2:'./image/tj/3.2.png',img3:'./image/tj/3.3.png',wang:'私人挑款师',time:'1000+评',time2:'1分钟前'},
		{title:'她出众屡获影后，却因一部电视剧，永远无法翻身！',img1:'./image/tj/4.1.png',img2:'./image/tj/4.2.png',img3:'./image/tj/4.3.png',wang:'YOKO时尚网',time:'10评',time2:'1分钟前'},
	]
}])
yd.controller('diantaiCtrl',['$scope',function($scope){
	$scope.dts = [
		{timu:'新闻资讯',more:'更多',image1:'./image/dt/7.1.png',tit1:'中俄军舰驶入钓鱼岛海域 日本反应一软',image2:'./image/dt/7.2.png',tit2:'国民党六名党员助选蔡英文 遭开除党级',image3:'./image/dt/7.3.png',tit3:'中国外交部：坚持谈判解决中菲南问题'},
		{timu:'脱口秀',more:'更多',image1:'./image/dt/8.1.png',tit1:'Auto录啊录-20-死去活来海马',image2:'./image/dt/8.2.png',tit2:'看完魔兽 他们都说我像吴彦祖',image3:'./image/dt/8.3.png',tit3:'vol.16教大家一个求婚成功的方法'},
		{timu:'娱乐',more:'更多',image1:'./image/dt/9.1.png',tit1:'成语的解释（经典精简版）',image2:'./image/dt/9.2.png',tit2:'vol.325 我在家里开餐厅',image3:'./image/dt/9.3.png',tit3:'中国外交部：坚持谈判解决中菲南问题'},
		{timu:'情感',more:'更多',image1:'./image/dt/10.1.png',tit1:'何炅：最美好的毕业季',image2:'./image/dt/10.2.png',tit2:'你就这样过了小半生',image3:'./image/dt/10.3.png',tit3:'真性情！ 明道母亲曝光儿子新恋情'},
		{timu:'财经',more:'更多',image1:'./image/dt/11.1.png',tit1:'中国深度财经 中国民间投资增速',image2:'./image/dt/11.2.png',tit2:'魏泽西之死，吊打百度，错放了真凶',image3:'./image/dt/11.4.png',tit3:'凤凰财经日报 肖链：日美投资谈'},
		{timu:'文史',more:'更多',image1:'./image/dt/12.1.png',tit1:'三国新说 计中计曹操杀二将',image2:'./image/dt/12.2.png',tit2:'庐山由到平静的恢复',image3:'./image/dt/12.3.png',tit3:'地球宣言：穿山甲栖息地迅速消失'},
		{timu:'公开课',more:'更多',image1:'./image/dt/13.1.png',tit1:'中国会跌入 中等收入陷阱吗',image2:'./image/dt/13.2.png',tit2:'朱镕基改革回望 谢天谢地谢政策',image3:'./image/dt/13.3.png',tit3:'佛光五十年'},

	]
}])
yd.controller('shishangCtrl',['$scope',function($scope){
	$scope.sss = [
		{title:'A4腰早就过时了 最热搜的28脸你有么？',img1:'./image/ss/1.1.png',img2:'./image/ss/1.2.png',img3:'./image/ss/1.3.png',wang:'北方网',time:'1评',time2:'1分钟前'},
		{title:'短发才不单调呢 且看娜扎白百何王子文如何玩转短发',img1:'./image/ss/2.1.png',img2:'./image/ss/2.2.png',img3:'./image/ss/2.3.png',wang:'悦已女性网',time:'3评',time2:'1分钟前'},
		{title:'瘦10斤高5cm的心机拍照法，让你美爆朋友圈',img1:'./image/ss/3.1.png',img2:'./image/ss/3.2.png',img3:'./image/ss/3.3.png',wang:'私人挑款师',time:'1000+评',time2:'1分钟前'},
		{title:'毕业季告别学生白生气 看杨紫关晓彤如何修炼成万人迷',img1:'./image/ss/4.1.png',img2:'./image/ss/4.2.png',img3:'./image/ss/4.3.png',wang:'YOKO时尚网',time:'10评',time2:'1分钟前'},
		{title:'买不起大牌？你可以像李宇春一样穿“山寨品”出门啊',img1:'./image/ss/5.1.png',img2:'./image/ss/5.2.png',img3:'./image/ss/5.3.png',wang:'橘子娱乐',time:'3评',time2:'1分钟前'},

	]
}])
yd.controller('qicheCtrl',['$scope',function($scope){
	$scope.qcs = [
		{title:'为什么男人喜欢手动档车 ',img1:'./image/qc/1.1.png',img2:'./image/qc/1.2.png',img3:'./image/qc/1.3.png',wang:'北方网',time:'1评',time2:'1分钟前'},
		{title:'大学门口，“车友”在宝马 车上放瓶饮料，结果出人意料 ',img1:'./image/qc/2.1.png',img2:'./image/qc/2.2.png',img3:'./image/qc/2.3.png',wang:'车买买',time:'3评',time2:'1分钟前'},
		{title:'扒一扒：世界上五辆最贵的汽车，看看可以买到它的哪部分',img1:'./image/qc/3.1.png',img2:'./image/qc/3.2.png',img3:'./image/qc/3.3.png',wang:'凤凰网',time:'1000+评',time2:'1分钟前'},
		{title:' 最受中国90后欢迎的汽车，没有一款日本车',img1:'./image/qc/4.1.png',img2:'./image/qc/4.2.png',img3:'./image/qc/4.3.png',wang:'YOKO时尚网',time:'10评',time2:'1分钟前'},
	]
}])
yd.controller('jiankangCtrl',['$scope',function($scope){
	$scope.jks = [
		{title:'男人生命中的5个“魔鬼时刻” ',img1:'./image/jk/2.1.png',wang:'北方网',time:'1评'},
		{title:'养心的最佳搭档 ',img1:'./image/jk/2.1.1.png',wang:'北方网',time:'21评'},
		{title:'每天睡多久死亡风险高 ',img1:'./image/jk/3.1.png',wang:'凤凰网',time:'13评'},
		{title:'晚餐吃什么减肥？4种晚餐让你边吃边瘦 ',img1:'./image/jk/4.1.png',wang:'新浪',time:'11评'},
		{title:'夏季刮痧有讲究 但有些人不宜刮痧  ',img1:'./image/jk/5.1.png',wang:'YOKO时尚网',time:'10评'},
	]
}])
yd.controller('dengluCtrl',['$scope',function($scope){}])
yd.controller('fanhuiCtrl',['$scope',function($scope){}])
yd.controller('titCtrl',['$scope',function($scope){
	
}])
yd.directive('ngView',[function(){
	return {
		restrict:"E",
		templateUrl:"views/diantai.html",
		link:function($scope,el){
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				initialSlide :2,
				loop : true,
				loopAdditionalSlides : 1,
				autoplay:2000,
			})
		}
	}
}])
yd.directive('ydYindao',[function(){
	return {
		restrict:"E",
		templateUrl:"views/yindao.html",
		link:function($scope,el){
			if(localStorage.ss){
				$scope.togg = true;
				// $scope.$apply();
			}else{
				$scope.togg = false;
			}
			$scope.ss=function(){
				localStorage.ss=1;
				$scope.togg=true;
				// $scope.$apply();
			}
		}
	}
}])
yd.directive('ydHeader',[function(){
	return {
		restrict:"E",
		templateUrl:"views/directive/yd-header.html",
	}
}])
yd.directive('ydFooter',[function(){
	return {
		restrict:"E",
		templateUrl:"views/directive/yd-footer.html",
	}
}])

yd.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/',{
        templateUrl:'views/tuijian.html'
      }).when('/tuijian',{
        controller:'tuijianCtrl',
        templateUrl:'views/tuijian.html',
      }).when('/diantai',{
        controller:'diantaiCtrl',
        templateUrl:'views/diantai.html',
      }).when('/shishang',{
        controller:'shishangCtrl',
        templateUrl:'views/shishang.html'
      }).when('/qiche',{
        controller:'qicheCtrl',
        templateUrl:'views/qiche.html'
      }).when('/jiangkang',{
        controller:'jiankangCtrl',
        templateUrl:'views/jiankang.html'
      }).when('/keji',{
        controller:'kejiCtrl',
        templateUrl:'views/keji.html'
      }).when('/shipin',{
        controller:'shipinCtrl',
        templateUrl:'views/shipin.html'
      }).when('/denglu',{
      	controller:'dengluCtrl',
      	templateUrl:'views/denglu.html',
      }).when('/fanhui',{
      	controller:'tuijianCtrl',
      	templateUrl:'views/tuijian.html',
      })
      // .when('/tit'),{
      // 	controller:'tuijianCtrl',
      // 	templateUrl:'views/tuijian.html',
      // }
      .otherwise({
          redirectTo:'/'
      });
}])

