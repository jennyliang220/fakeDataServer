var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.get('/mip', function (req, res) {
	var currentPage = req.query.pn || 1; //当前页数, 1为第一页
	var itemsPerPage = 6; // 每页条数
	// 获取JSON假数据
	var json = require('./public/json/infinite.json');
	// 创建返回数组, 如要获取第2页数据，就是下标第6-11条
	var itemArr = []; 
	// for (var i = 0; i < itemsPerPage; i++) {
	// 	var currentIndex = (currentPage - 1) * 6 + i;
	// 	// 保证获取数据的 index 不大于数据总条数
	// 	if(currentIndex < json.length) {
	// 		json[currentIndex]["index"] = currentIndex + 1;
	// 		itemArr.push(json[currentIndex]);
	// 	}
	// }
	// 创建返回值
	// res.jsonp({
	//     status: 0, 
	//     data: { 
	//         items: itemArr
	//     }
	// });
	res.jsonp(json);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
