// ==UserScript==
// @name         360搜索去广告
// @namespace    http://tampermonkey.net/
// @version      1.1
// @icon         https://www.so.com/favicon.ico
// @description  去除360搜索结果和页面中的绝大多数广告，包括：360搜索、360资讯、360问答、360视频、360图片、360良医、360地图、360百科、360国学、360文库、360翻译等
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.so.com/*
// @match        *://*.360kan.com/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';

    const cycle = 500; // 广告检测周期

    // 360搜索
    if (location.href.indexOf('www.so.com') > 0) {
        setInterval(function () {
            // 首页广告
            $(".sad").remove();
            $(".lawnfooter-image__panel").remove(); // 横幅广告
            $("[data-i='tmall']").remove();
            // 侧边栏
            $("#side").remove();
            // 条目广告
            $("#m-spread-left").remove();
            $(".res-mediav").remove();
            $(".m-spread-middle").remove();
            $("#news-sdk-sad").remove();
            $(".mh-ad").parent().remove();
            $("#e_idea_pp").remove();
            $("div[id*='--strong']").remove();
            $("div[id*='--normal']").remove();
            $("#m-spread-bottom").remove();
        }, cycle);
    }

    // 360资讯
    if (location.href.indexOf('news.so.com') > 0) {
        setInterval(function () {
            $("#side").remove(); // 侧边栏
            $(".info-flow").remove(); // 智能推荐
            $(".js-multi-i-item").remove(); // 条目广告
        }, cycle);
    }

    // 360问答
    if (location.href.indexOf('wenda.so.com') > 0) {
        setInterval(function () {
            $(".aside").remove(); // 侧边栏
            $("#js-mod-fixed-float").remove(); // 右下角广告
            // 左侧栏
            $(".js-left-flow-busi").remove();
            $("#attention").remove(); // 猜你关注
            $("#guess-see").remove(); // 猜你想看
            // 条目广告
            $("#e_idea_wenda_leftBox").remove();
            $(".js-busi-item").remove();
            $(".js-ajax-busi-item").remove();
            // 感兴趣的内容
            $("#detail-guess-wrap").remove();
            // 今日热点
            $(".js-mod-flow").remove();
        }, cycle);
    }

    // 360视频
    if (location.href.indexOf('360kan.com') > 0) {
        setInterval(function () {
            $(".rt-btm-popup_ad").remove();
            $(".info-flow__ad").remove();
            $(".p-searchad-wrap").remove(); // 文字广告
            $("#soRightAd").remove();
            // 条目广告
            $(".adbig").remove();
            $("[data-adclicklog]").remove();
            $("[data-so-mod='list-ad']").remove();
        }, cycle);
    }

    // 360图片
    if (location.href.indexOf('image.so.com') > 0) {
        setInterval(function () {
            $("[data-id*='cm_extended_init']").remove(); // 条目广告
            $(".related_query").parent().remove(); // 相关搜索
        }, cycle);
    }

    // 360良医
    if (location.href.indexOf('ly.so.com') > 0) {
        setInterval(function () {
            $("#so_ob").remove(); // 侧边栏（保留提示）
            $("#news-card").remove(); // 热门资讯推荐
            $("#m-spread-left").remove();
        }, cycle);
    }

    // 360地图
    if (location.href.indexOf('ditu.so.com') > 0) {
        setInterval(function () {
            $("[data-e_href]").remove(); // 条目广告
        }, cycle);
    }

    // 360百科
    if (location.href.indexOf('baike.so.com/search') > 0) {
        setInterval(function () {
            $(".aside").remove(); // 侧边栏
            $("#e_idea_wenda_leftBox").remove(); // 条目广告
            $("div[id*='mvdiv']").remove(); // 横幅广告
        }, cycle);
    }
    if (location.href.indexOf('baike.so.com/doc') > 0) {
        setInterval(function () {
            // 右下角广告
            $("#js-mod-fixed-float").remove();
            $(".js-newsfeed-popup").remove();
            // 侧边栏广告
            $("div[id*='J-mod-right-ad']").remove(); // 侧边栏广告
            $("#J-mod-right-recommend").remove(); // 为您推荐广告
            $("#J-mod-hot-rank").remove(); // 实时热点
            $("#rightbanner").remove(); // 侧边栏广告
            // 底部广告
            $("#J-mod-interested-possible").remove(); // 搜索发现
            $(".entry-plus").remove(); // 热点资讯
            $("#js-doc-recommand").remove(); // 为您推荐广告
        }, cycle);
    }

    // 360国学
    if (location.href.indexOf('guoxue.baike.so.com') > 0) {
        setInterval(function () {
            $(".right").remove(); // 侧边栏
            $(".js-newsfeed-popup").remove();// 右下角广告
            $("#js-doc-recommand").remove(); // 为您推荐广告
            $(".lm-bottom-container").remove(); // 横幅广告
            $("#J-entry-newsfeed-bottom").remove(); // 资讯
            $("#interest-wrap").remove(); // 可能感兴趣的内容
        }, cycle);
    }

    // 360文库
    if (location.href.indexOf('wenku.so.com/s') > 0) {
        setInterval(function () {
            $(".rt-side").remove(); // 侧边栏
            $("#e_idea_wenda_leftBox").remove(); // 条目广告
        }, cycle);
    }
    if (location.href.indexOf('wenku.so.com/d') > 0) {
        setInterval(function () {
            $(".js-page-busi").remove(); // 文字广告
            $("#interest").remove(); // 可能感兴趣的内容
            $(".infoFlow").remove(); // 今日热点
            $(".fixed-rtbot").remove(); // 右下角广告
            // 侧边栏
            $("[data-so-mod='right_flow']").remove();
            $("#js-fixed-rt").remove();
        }, cycle);
    }

    // 360翻译
    if (location.href.indexOf('fanyi.so.com') > 0) {
        setInterval(function () {
            $("#card_container").remove(); // 热点推荐广告
        }, cycle);
    }
})();
