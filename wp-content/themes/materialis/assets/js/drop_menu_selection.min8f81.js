!function(e){function n(n){n.find("[data-selected-item]").each(function(){e(this).removeAttr("data-selected-item");var t=n.children("ul");n.is(".mobile-menu")&&t.slideDown()})}function t(n,t){e("body").off("tap.navigation-clear-selection"),e(window).off("scroll.navigation-clear-selection"),n.is(t)||e.contains(t[0],this)||a(t)}function a(n,t){n.find("li.hover").each(function(){var n;t&&((n=e(this)).find("[data-selected-item]").length>0||n.is("[data-selected-item]"))||e(this).removeClass("hover")})}function i(e,n){if(n.parentsUntil("ul.dorpdown-menu").filter("li").length>0){var t=n.children("ul"),a=t.length&&n.offset().left+n.width()+300>window.innerWidth,i=t.length&&n.closest(".open-reverse").length;a||i?t.addClass("open-reverse"):t.length&&t.removeClass("open-reverse")}}e.event.special.tap||(e.event.special.tap={setup:function(n,t){e(this).bind("touchstart",e.event.special.tap.handler).bind("touchmove",e.event.special.tap.handler).bind("touchend",e.event.special.tap.handler)},teardown:function(n){e(this).unbind("touchstart",e.event.special.tap.handler).unbind("touchmove",e.event.special.tap.handler).unbind("touchend",e.event.special.tap.handler)},handler:function(n){var t=e(this);t.data(n.type,1),"touchend"!==n.type||t.data("touchmove")?t.data("touchend")&&t.removeData("touchstart touchmove touchend"):(n.type="tap",e.event.handle.apply(this,arguments))}}),e("ul.dropdown-menu").each(function(){var o=e(this);if(o.hasClass("mobile-menu")){var s=e('<a href="#" data-menu-toggler="">Menu</a>');o.before(s),s.click(function(){s.hasClass("opened")?(o.slideUp(300,function(){o.css("display","")}),o.removeClass("mobile-menu"),s.removeClass("opened")):(s.addClass("opened"),o.slideDown(),o.addClass("mobile-menu"),a(o),n(o))})}e("");o.on("tap.navigation","li.menu-item > a",function(s){var l,d,r=e(this),c=r.parent();if(c.children("ul").length)if(c.is("[data-selected-item]")){var h=r.attr("href");if(0===h.indexOf("#")){var u=h.replace("#","").trim();if(!u||!e("#"+u).length)return}n(o)}else d=c,n(l=o),d.attr("data-selected-item",!0),a(l,d),d.addClass("hover"),i(0,d),e("body").on("tap.navigation-clear-selection","*",function(){t(jQuery(this),l)}),e(window).on("scroll.navigation-clear-selection",function(){t(jQuery(this),l)}),s.preventDefault(),s.stopPropagation();else n(o)}),o.on("mouseover.navigation","li",function(){o.find("li.hover").removeClass("hover"),i(0,e(this))})}),e(function(){window.wp&&window.wp.customize&&jQuery(".offcanvas_menu").find("li > ul").eq(0).each(function(){jQuery(this).show(),jQuery(this).parent().addClass("open")})})}(jQuery);
