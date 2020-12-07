var arr = [10,20,40,80,160];

//过滤出小于100的数据
var arr1 = arr.filter(function(item){
	return item < 100;
})

//所有的arr数据都处理下乘以二
var arr2 = arr.map(function(item){
	return item*2;
});

//所有数据加起来
//pre前一个数值  初始化为0
//next下一个数值  next从arr第一个开始
var total = arr.reduce(function(pre,next){
	return pre+next;
},0);