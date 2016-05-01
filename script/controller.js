var almanacs = [
    {"Url": "http://www.iqiyi.com","Title":"看爱情动作片"},
    {"Url": "http://www.iqiyi.com","Title":"看爱情喜剧片"},
    {"Url": "http://www.baidu.com","Title": "修代码bug"},
    {"Url": "http://www.baidu.com","Title": "写前端代码"},
    {"Url": "http://www.baidu.com","Title": "谈情说爱"},
    {"Url": "http://www.baidu.com","Title": "提交代码"}
];
function AlmanacController($scope)
{
    $scope.almanacs = [];
    var date = new Date();
    var data =parseInt(""+date.getFullYear()+date.getMonth()+date.getDate());  
    for(var i=0;i<5;i++)
    {
        var isShould = data*(i+1)%2 == 0?"宜":"忌";
        var index = (data*(i+1))%almanacs.length;
        var row = almanacs[index];
        row.Title = isShould+":"+row.Title;
        $scope.almanacs[i] = row;
    }
}