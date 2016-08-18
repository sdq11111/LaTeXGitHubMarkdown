/*jslint browser: true*/
/*global $, chrome, window*/
$(document).ready(function () {
    'use strict';
    $.ajax({
        url: 'http://www.baidu.com/',
        success: function () {
            $('#button_text').text('网络正常');
            $('#status').attr('class', 'success');
        },
        error: function () {
            $('#status').attr('class', 'fail');
            $.ajax({
                url: 'http://220.181.111.188/',
                success: function () {
                    $('#button_text').text('DNS解析异常');
                },
                error: function () {
                    $('#button_text').text('无连接');
                }
            });
        }
    });
    $('#button_github').on('click', function () {
        chrome.tabs.create({url: 'https://github.com/sdq11111/NetworkStatus/'});
    });
    $('#button_issues').on('click', function () {
        chrome.tabs.create({url: 'https://github.com/sdq11111/NetworkStatus/issues/'});
    });
});
