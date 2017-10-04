// Location polyfill for ie, ff < 21.0 and safari
if (typeof window.location.origin === "undefined") {
    window.location.origin = window.location.protocol + "//" + window.location.host;
}

// Utility (helper) functions
var utils = {

    // Finds a handlebars template by id.
    // Populates it with the passed in data
    // Appends the generated html to div#order-page-container
    renderPageTemplate: function (templateId, data, cb) {
        var _data = data || {};
        // var templateScript = jQuery(templateId).html();
        // var template = Handlebars.compile(templateScript);


        // Empty the container and append new content
        jQuery("#page-container").empty();

        // Empty the container and append new content
        jQuery("#page-container").append(doT.render(templateId, _data));
        cb();
    },

    // // If a hash can not be found in routes
    // // then this function gets called to show the 404 error page
    // pageNotFoundError: function() {

    //     var data = {
    //         errorMessage: "404 - Page Not Found"
    //     };
    //     this.renderPageTemplate("#error-page-template", data);
    // },

    // // Fetch json data from the given url
    // // @return promise
    // fetch: function(url, data) {
    //     var _data = data || {};
    //     return jQuery.ajax({
    //         context: this,
    //         url: window.location.origin + "/" + url,
    //         data: _data,
    //         method: "GET",
    //         dataType: "JSON"
    //     });
    // }
};


/**
 *  Router - Handles routing and rendering for the order pages
 *
 *  Summary:
 *      - url hash changes
 *      - render function checks routes for the hash changes
 *      - function for that hash gets called and loads page content
 */
var router = {

    // An object of all the routes
    routes: {},
    init: function () {
        console.log('router was created...');
        this.bindEvents();

        // Manually trigger a hashchange to start the router.
        // This make the render function look for the route called "" (empty string)
        // and call it"s function
        jQuery(window).trigger("hashchange");
    },
    bindEvents: function () {

        // Event handler that calls the render function on every hashchange.
        // The render function will look up the route and call the function
        // that is mapped to the route name in the route map.
        // .bind(this) changes the scope of the function to the
        // current object rather than the element the event is bound to.
        jQuery(window).on("hashchange", this.render.bind(this));
    },
    // Checks the current url hash tag
    // and calls the function with that name
    // in the routes
    render: function () {

        // Get the keyword from the url.
        var keyName = window.location.hash.split("/")[0];

        // Grab anything after the hash
        var url = window.location.hash;

        // Hide whatever page is currently shown.
        jQuery("#page-container")
            .find(".active")
            .hide()
            .removeClass("active");

        // Call the the function
        // by key name
        if (this.routes[keyName]) {
            this.routes[keyName](url, function () {
                _page_reload();
                // var bLazy = new Blazy({
                //     selector: '.lazy',
                //     offset: 100,
                //     success: function (ele) {
                //         // Image has loaded
                //         // Do your business here
                //         //console.log(ele);
                //     }
                // });
            });

            //LazyLoad.js(['./js/streamium.min.js', './js/s3bubble.min.js']);
            // Render the error page if the 
            // keyword is not found in routes.
        } else {
//            utils.pageNotFoundError();
        }
    }
};

var spaRoutes = {

    // Default route (home page)
    "#home": function (url, cb) {
        console.log('home was called...');
        window.streamium_object = {
            "ajax_url": "data",
            "recently_watched_api_nonce": "c5e57fb0cd",
            "custom_api_nonce": "5574dfb302",
            "home_api_nonce": "880999b007",
            "tax_api_nonce": "1f81b0f82f",
            "search_api_nonce": "eb406ad5b3",
            "extra_api_nonce": "1476195816",
            "query": null,
            "search": [],
            "is_home": "1",
            "is_archive": "",
            "is_tax": "",
            "is_search": "",
            "tile_count": "6",
            "read_more": "read more"
        };
        utils.renderPageTemplate("home", {}, cb);
    },

    "#cat": function (url, cb) {
        console.log('cat was called...');
        window.streamium_object = {
            "ajax_url": "data",
            "recently_watched_api_nonce": "c5e57fb0cd",
            "custom_api_nonce": "5574dfb302",
            "home_api_nonce": "880999b007",
            "tax_api_nonce": "1f81b0f82f",
            "search_api_nonce": "eb406ad5b3",
            "extra_api_nonce": "1476195816",
            "query": {
                "term_id": 66,
                "name": "Action",
                "slug": "action",
                "term_group": 0,
                "term_taxonomy_id": 66,
                "taxonomy": "movies",
                "description": "",
                "parent": 0,
                "count": 19,
                "filter": "raw"
            },
            "search": [],
            "is_home": "",
            "is_archive": "1",
            "is_tax": "1",
            "is_search": "",
            "tile_count": "6",
            "read_more": "read more"
        };
        utils.renderPageTemplate("cat", {}, cb);
    },
    "#tv": function (url, cb) {
        console.log('tv was called...');
        window.streamium_object = {
            "ajax_url": "data",
            "recently_watched_api_nonce": "c5e57fb0cd",
            "custom_api_nonce": "5574dfb302",
            "home_api_nonce": "880999b007",
            "tax_api_nonce": "1f81b0f82f",
            "search_api_nonce": "eb406ad5b3",
            "extra_api_nonce": "1476195816",
            "query": {
                "name": "tv",
                "label": "TV Programs",
                "labels": {
                    "name": "TV Programs",
                    "singular_name": "TV Programs",
                    "add_new": "Add New",
                    "add_new_item": "Add New Post",
                    "edit_item": "Edit Post",
                    "new_item": "New Post",
                    "view_item": "View Post",
                    "view_items": "View Posts",
                    "search_items": "Search Posts",
                    "not_found": "No posts found.",
                    "not_found_in_trash": "No posts found in Trash.",
                    "parent_item_colon": null,
                    "all_items": "TV Programs",
                    "archives": "TV Programs",
                    "attributes": "Post Attributes",
                    "insert_into_item": "Insert into post",
                    "uploaded_to_this_item": "Uploaded to this post",
                    "featured_image": "Featured Image",
                    "set_featured_image": "Set featured image",
                    "remove_featured_image": "Remove featured image",
                    "use_featured_image": "Use as featured image",
                    "filter_items_list": "Filter posts list",
                    "items_list_navigation": "Posts list navigation",
                    "items_list": "Posts list",
                    "menu_name": "TV Programs",
                    "name_admin_bar": "TV Programs"
                },
                "description": "",
                "public": true,
                "hierarchical": false,
                "exclude_from_search": false,
                "publicly_queryable": true,
                "show_ui": true,
                "show_in_menu": true,
                "show_in_nav_menus": true,
                "show_in_admin_bar": true,
                "menu_position": 5,
                "menu_icon": "https:\/\/s3.amazonaws.com\/s3bubble-cdn\/theme-images\/s3bubblelogo.png",
                "capability_type": "post",
                "map_meta_cap": true,
                "register_meta_box_cb": null,
                "taxonomies": ["post_tag", "programs"],
                "has_archive": true,
                "query_var": "tv",
                "can_export": true,
                "delete_with_user": null,
                "_builtin": false,
                "_edit_link": "post.php?post=%d",
                "cap": {
                    "edit_post": "edit_post",
                    "read_post": "read_post",
                    "delete_post": "delete_post",
                    "edit_posts": "edit_posts",
                    "edit_others_posts": "edit_others_posts",
                    "publish_posts": "publish_posts",
                    "read_private_posts": "read_private_posts",
                    "read": "read",
                    "delete_posts": "delete_posts",
                    "delete_private_posts": "delete_private_posts",
                    "delete_published_posts": "delete_published_posts",
                    "delete_others_posts": "delete_others_posts",
                    "edit_private_posts": "edit_private_posts",
                    "edit_published_posts": "edit_published_posts",
                    "create_posts": "edit_posts"
                },
                "rewrite": {"slug": "tv", "with_front": false, "pages": true, "feeds": true, "ep_mask": 1},
                "show_in_rest": false,
                "rest_base": false,
                "rest_controller_class": false
            },
            "search": [],
            "is_home": "",
            "is_archive": "1",
            "is_tax": "",
            "is_search": "",
            "tile_count": "6",
            "read_more": "read more"
        };
        utils.renderPageTemplate("tv", {}, cb);
    },
    '#play': function (url, cb) {
        window.streamium_object = {
            "ajax_url": "data",
            "recently_watched_api_nonce": "c5e57fb0cd",
            "custom_api_nonce": "5574dfb302",
            "home_api_nonce": "880999b007",
            "tax_api_nonce": "1f81b0f82f",
            "search_api_nonce": "eb406ad5b3",
            "extra_api_nonce": "1476195816",
            "query": {
                "ID": 1191,
                "post_author": "1",
                "post_date": "2017-09-13 15:38:50",
                "post_date_gmt": "2017-09-13 15:38:50",
                "post_content": "Makoto met tout en oeuvre pour \u00eatre un p\u00e8re exemplaire avec son fils Kazuki. En d\u00e9pit de tous ses efforts, la violence de son pass\u00e9 le hante, et il n'a d'autre choix que de s\u2019y confronter, malgr\u00e9 la pr\u00e9sence de son fils \u00e0 qui il avait jusque-l\u00e0, toujours tout cach\u00e9.",
                "post_title": "Vimeo Example",
                "post_excerpt": "",
                "post_status": "publish",
                "comment_status": "open",
                "ping_status": "closed",
                "post_password": "",
                "post_name": "vimeo-example",
                "to_ping": "",
                "pinged": "",
                "post_modified": "2017-10-02 13:25:43",
                "post_modified_gmt": "2017-10-02 13:25:43",
                "post_content_filtered": "",
                "post_parent": 0,
                "guid": "http:\/\/streamiumtheme.com\/?post_type=movie&#038;p=1191",
                "menu_order": 0,
                "post_type": "movie",
                "post_mime_type": "",
                "comment_count": "0",
                "filter": "raw"
            },
            "search": [],
            "is_home": "",
            "is_archive": "",
            "is_tax": "",
            "is_search": "",
            "tile_count": "6",
            "read_more": "read more"
        };
        window.video_post_object = {
            "post_id": "1191",
            "subTitle": "You're watching",
            "title": "Vimeo Example",
            "para": "",
            "percentage": "0",
            "codes": ["https:\/\/vimeo.com\/224650749"],
            "brand_sliders": "#ef2930",
            "brand_control": "#0a0a0a",
            "brand_icons": "#f2f2f2",
            "stream": "",
            "youtube": "1",
            "vpaid": "",
            "poster": "http:\/\/streamiumtheme.com\/wp-content\/uploads\/2017\/09\/216279717_1280x720-960x540.jpg",
            "skip": "0",
            "nonce": "e4f6c28114"
        };
        utils.renderPageTemplate("play", {}, cb);
    },
    '#search': function (url, cb) {
        window.streamium_object = {
            "ajax_url": "data",
            "recently_watched_api_nonce": "fabe7bad2e",
            "custom_api_nonce": "d8617750b3",
            "home_api_nonce": "ebe77de1ce",
            "tax_api_nonce": "e204161a68",
            "search_api_nonce": "8299bcafe3",
            "extra_api_nonce": "fafb473689",
            "query": null,
            "search": {"s": "action"},
            "is_home": "",
            "is_archive": "",
            "is_tax": "",
            "is_search": "1",
            "tile_count": "6",
            "read_more": "read more"
        };
        utils.renderPageTemplate("search", {}, cb);
    }
    // "#about": function(url) {
    //     console.log('about was called...');
    //     utils.renderPageTemplate("#about-page-template");
    // },
    // "#contact": function(url) {
    //     console.log('contact was called...');
    //     utils.renderPageTemplate("#contact-page-template");
    // }
};

// Create a new instance of the router
var spaRouter = jQuery.extend({}, router, {
    routes: spaRoutes
});

spaRouter.init();
if (window.location.hash == "" || window.location.hash == "#")
    window.location.hash = "#home";
