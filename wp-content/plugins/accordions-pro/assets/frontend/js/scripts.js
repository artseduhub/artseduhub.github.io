
document.addEventListener("DOMContentLoaded", function (event) {

    var accordions = document.querySelectorAll('[data-accordions]');


    if (accordions != null) {
        accordions.forEach(accordionsWrap => {


            var accordionsData = accordionsWrap.getAttribute('data-accordions');


            if (accordionsData == null) return;

            var accordionsDataObj = JSON.parse(accordionsData);
            var accordionsId = accordionsDataObj.id;
            var lazyLoad = accordionsDataObj.lazyLoad;
            var scrollTop = accordionsDataObj.scrollTop;
            var URLHash = accordionsDataObj.URLHash;
            var scrollTopOffset = accordionsDataObj.scrollTopOffset;
            var stats = accordionsDataObj.stats;
            var headerToggle = accordionsDataObj.headerToggle;



            jQuery("#accordions-" + accordionsId + " .items").on("accordionactivate", function (event, ui) {
                if (scrollTop == 'yes') {
                    if (!jQuery.isEmptyObject(ui.newHeader.offset())) {
                        jQuery("html:not(:animated), body:not(:animated)").animate({
                            scrollTop: ui.newHeader.offset().top + scrollTopOffset
                        }, "slow");
                    }
                }


                // if (URLHash) {
                //     var hashId = (ui.newHeader[0] != undefined) ? ui.newHeader[0].id : '';
                //     if (hashId.length > 0) {
                //         window.location.hash = hashId;
                //     }
                // }




            });


            setTimeout(() => {
                if (typeof accordions_active != 'undefined') {
                    for (var k in accordions_active) {
                        var index = accordions_active[k];
                        index.map(x => {
                            jQuery("#accordions-" + accordionsId + " .items").accordion("option", "active", x);
                        })
                    }
                }

            }, 2000)


            if (stats) {

                jQuery("#accordions-" + accordionsId + " .accordions-head").click(function () {
                    header_id = jQuery(this).attr('header_id');
                    post_id = jQuery(this).attr('post_id');
                    jQuery.ajax({
                        type: 'POST',
                        context: this,
                        url: accordions_ajax.accordions_ajaxurl,
                        data: {
                            "action": "accordions_ajax_track_header",
                            "header_id": header_id,
                            "post_id": post_id,
                        },
                        success: function (data) { }
                    });
                });

            }

            if (headerToggle) {

                jQuery("#accordions-" + accordionsId + " .accordions-head").click(function () {
                    toogle_text = jQuery(this).attr('toggle-text');
                    main_text = jQuery(this).attr('main-text');
                    if (jQuery(this).hasClass('ui-state-active')) {
                        if (toogle_text != null && toogle_text != '') {
                            jQuery(this).children('.accordions-head-title').html(toogle_text);
                        }
                    } else {
                        if (main_text != null && main_text != '') {
                            jQuery(this).children('.accordions-head-title').html(main_text);
                        }
                    }
                    id = jQuery(this).attr('id');
                });

            }




            // if (URLHash) {
            //     var hash = window.location.hash;
            //     if (hash) {
            //         index = jQuery("#accordions-" + accordionsId + " " + hash).attr('itemcount');
            //         if (index) {
            //             //index = index.replace('ui-id-','');
            //             //header = jQuery("#accordions-" + accordionsId + " "+hash);
            //             index = parseInt(index);
            //             //jQuery("html:not(:animated), body:not(:animated)").animate({ scrollTop: header.offset().top + 800 }, "slow");
            //             jQuery("#accordions-" + accordionsId + " .items").accordion("option", "active", index);
            //         }
            //     }

            // }




















        })
    }




    var accordionstabs = document.querySelectorAll('[data-accordionstabs]');

    if (accordionstabs != null) {
        accordionstabs.forEach(accordionsWrap => {


            var accordionsData = accordionsWrap.getAttribute('data-accordionstabs');


            if (accordionsData == null) return;

            var accordionsDataObj = JSON.parse(accordionsData);
            var accordionsId = accordionsDataObj.id;
            var lazyLoad = accordionsDataObj.lazyLoad;
            var expandedOther = accordionsDataObj.expandedOther;
            var collapsible = accordionsDataObj.collapsible;
            var event = accordionsDataObj.event;
            var active = accordionsDataObj.active;

            var animateStyle = accordionsDataObj.animateStyle;
            var animateDelay = accordionsDataObj.animateDelay;
            var navigation = accordionsDataObj.navigation;

            var accordionitemsWrap = document.querySelector('#accordions-' + accordionsId + ' .tabs-content');
            var lazyWrap = document.querySelector('#accordions-lazy-' + accordionsId);




        })
    }

















});
