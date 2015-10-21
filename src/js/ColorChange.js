/**
 * @author wr
 * @email mvpjly@163.com
 * @date 2014/10/19
 */
(function ($) {
    "use strict";
    var ColorChange = function (element, options) {
        this.ele = element;
        this.options = options;
        return "undefined" != typeof this.init && this.init.apply(this, arguments)
    };
    ColorChange.prototype = {
        colorindex: 0,
        coloring: false,
        init: function () {
            var _this = this;
            _this.changetype = (_this.options.type == "text") ? "color" : _this.options.type + "Color";
            _this.target = !_this.options.changeChildren ? [this.ele] : $(this.ele).children();
            _this._swich();
        },
        _swich: function () {
            var _this = this;
            _this.options.auto && _this.start();
            _this.options.pause && $(_this.ele).on("click", function () {
                _this.coloring ? _this.stop() : _this.start();
            });
        },
        changecolor: function () {
            var _this = this;
            if (_this.options.randomcolor) {//如果随机生成颜色
                return '#' +
                    (function (color) {
                        return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                        && (color.length == 6) ? color : arguments.calle(color);
                    })('');
            }
            if (_this.options.randomshow) {
                return _this.options.colors[Math.floor(Math.random() * _this.options.colors.length)];
            }
            _this.colorindex >= _this.options.colors.length ? _this.colorindex = 0 : _this.colorindex++;
            return _this.options.colors[_this.colorindex - 1];
        },
        start: function () {
            var _this = this;
            this.intval && clearInterval(this.intval);
            _this.coloring = true;
            _this.intval = setInterval(function () {
                $.each(_this.target, function (i, item) {
                    item.style[_this.changetype] = _this.changecolor();
                });
            }, _this.options.interval);
        },
        stop: function () {
            this.coloring = false;
            var _this = this;
            $.each(_this.target, function (i, item) {
                item.style[_this.changetype] = _this.options.normalcolor;
            });
            clearInterval(this.intval);
        }
    };
    var defaults = {
        auto: true,//是否自动开始
        type: "text",//目标变色类型：text、background、border
        changeChildren: false,//是否以所有子元素作为变色对象
        randomcolor: false,//是否随机生成颜色
        interval: 200,//变色频率
        normalcolor: '#000',//目标原始颜色
        colors: [
            '#00ffff',
            '#f1c40f',
            '#3498db',
            '#000000',
            '#1abc9c',
            '#e67e22',
            '#95a5a6',
            '#ffffff',
            '#2ecc71',
            '#f00000'
        ],//指定颜色集合，randomcolor=false时有效
        randomshow: false,//是否随机展示指定的颜色集合
        pause: true//是否支持点击目标暂停/恢复
    };
    $.fn.colorChange = function (method) {
        return this.each(function () {
            var ui = $._data(this, "ColorChange");
            if (!ui) {
                var opts = $.extend({}, defaults, method);
                ui = new ColorChange(this, opts);
                $._data(this, "ColorChange", ui);
            }
            if (typeof method === "string" && typeof ui[method] == "function") {
                ui[method].apply(ui, arguments);
            }
        });
    };
})(jQuery);

