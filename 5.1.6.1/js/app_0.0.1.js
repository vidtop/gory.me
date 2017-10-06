__data_api="data_"+__data_version,__views_api="views_"+__views_version,void 0===window.location.origin&&(window.location.origin=window.location.protocol+"//"+window.location.host);var utils={renderPageTemplate:function(e,t,o){var a=t||{};console.log("render:"+e),window.render&&window.render[e]?(jQuery("#page-container").empty(),jQuery("#page-container").append(window.render[e](a)),o&&o()):LazyLoad.js([__views_api+"/"+e+".js"],function(){jQuery("#page-container").empty(),jQuery("#page-container").append(window.render[e](a)),o&&o()})},pageNotFoundError:function(){this.renderPageTemplate("error_404",{})}},_bLazy,router={routes:{},init:function(){console.log("router was created..."),this.bindEvents(),jQuery(window).trigger("hashchange")},bindEvents:function(){jQuery(window).on("hashchange",this.render.bind(this))},render:function(){var e=window.location.hash.split("/")[0],t=window.location.hash;jQuery("#page-container").find(".active").hide().removeClass("active"),this.routes[e]?this.routes[e](t,function(){console.log("after route:"+e),_page_reload(),setTimeout(function(){window._bLazy?window._bLazy.revalidate():window._bLazy=new Blazy({selector:".lazy",success:function(e){}})},1e3)}):utils.pageNotFoundError()}},spaRoutes={"#home":function(e,t){console.log("home was called..."),window.streamium_object={ajax_url:__data_api,recently_watched_api_nonce:"c5e57fb0cd",custom_api_nonce:"5574dfb302",home_api_nonce:"880999b007",tax_api_nonce:"1f81b0f82f",search_api_nonce:"eb406ad5b3",extra_api_nonce:"1476195816",query:null,search:[],is_home:"1",is_archive:"",is_tax:"",is_search:"",tile_count:"6",read_more:"read more"},utils.renderPageTemplate("home",{},t)},"#cat":function(e,t){console.log("cat was called..."),window.streamium_object={ajax_url:__data_api,recently_watched_api_nonce:"c5e57fb0cd",custom_api_nonce:"5574dfb302",home_api_nonce:"880999b007",tax_api_nonce:"1f81b0f82f",search_api_nonce:"eb406ad5b3",extra_api_nonce:"1476195816",query:{term_id:66,name:"Action",slug:"action",term_group:0,term_taxonomy_id:66,taxonomy:"movies",description:"",parent:0,count:19,filter:"raw"},search:[],is_home:"",is_archive:"1",is_tax:"1",is_search:"",tile_count:"6",read_more:"read more"},utils.renderPageTemplate("cat",{},t)},"#tv":function(e,t){console.log("tv was called..."),window.streamium_object={ajax_url:__data_api,recently_watched_api_nonce:"c5e57fb0cd",custom_api_nonce:"5574dfb302",home_api_nonce:"880999b007",tax_api_nonce:"1f81b0f82f",search_api_nonce:"eb406ad5b3",extra_api_nonce:"1476195816",query:{name:"tv",label:"TV Programs",labels:{name:"TV Programs",singular_name:"TV Programs",add_new:"Add New",add_new_item:"Add New Post",edit_item:"Edit Post",new_item:"New Post",view_item:"View Post",view_items:"View Posts",search_items:"Search Posts",not_found:"No posts found.",not_found_in_trash:"No posts found in Trash.",parent_item_colon:null,all_items:"TV Programs",archives:"TV Programs",attributes:"Post Attributes",insert_into_item:"Insert into post",uploaded_to_this_item:"Uploaded to this post",featured_image:"Featured Image",set_featured_image:"Set featured image",remove_featured_image:"Remove featured image",use_featured_image:"Use as featured image",filter_items_list:"Filter posts list",items_list_navigation:"Posts list navigation",items_list:"Posts list",menu_name:"TV Programs",name_admin_bar:"TV Programs"},description:"",public:!0,hierarchical:!1,exclude_from_search:!1,publicly_queryable:!0,show_ui:!0,show_in_menu:!0,show_in_nav_menus:!0,show_in_admin_bar:!0,menu_position:5,menu_icon:"https://s3.amazonaws.com/s3bubble-cdn/theme-images/s3bubblelogo.png",capability_type:"post",map_meta_cap:!0,register_meta_box_cb:null,taxonomies:["post_tag","programs"],has_archive:!0,query_var:"tv",can_export:!0,delete_with_user:null,_builtin:!1,_edit_link:"post.php?post=%d",cap:{edit_post:"edit_post",read_post:"read_post",delete_post:"delete_post",edit_posts:"edit_posts",edit_others_posts:"edit_others_posts",publish_posts:"publish_posts",read_private_posts:"read_private_posts",read:"read",delete_posts:"delete_posts",delete_private_posts:"delete_private_posts",delete_published_posts:"delete_published_posts",delete_others_posts:"delete_others_posts",edit_private_posts:"edit_private_posts",edit_published_posts:"edit_published_posts",create_posts:"edit_posts"},rewrite:{slug:"tv",with_front:!1,pages:!0,feeds:!0,ep_mask:1},show_in_rest:!1,rest_base:!1,rest_controller_class:!1},search:[],is_home:"",is_archive:"1",is_tax:"",is_search:"",tile_count:"6",read_more:"read more"},utils.renderPageTemplate("tv",{},t)},"#play":function(e,t){window.streamium_object={ajax_url:__data_api,recently_watched_api_nonce:"c5e57fb0cd",custom_api_nonce:"5574dfb302",home_api_nonce:"880999b007",tax_api_nonce:"1f81b0f82f",search_api_nonce:"eb406ad5b3",extra_api_nonce:"1476195816",query:{ID:1191,post_author:"1",post_date:"2017-09-13 15:38:50",post_date_gmt:"2017-09-13 15:38:50",post_content:"Makoto met tout en oeuvre pour être un père exemplaire avec son fils Kazuki. En dépit de tous ses efforts, la violence de son passé le hante, et il n'a d'autre choix que de s’y confronter, malgré la présence de son fils à qui il avait jusque-là, toujours tout caché.",post_title:"Vimeo Example",post_excerpt:"",post_status:"publish",comment_status:"open",ping_status:"closed",post_password:"",post_name:"vimeo-example",to_ping:"",pinged:"",post_modified:"2017-10-02 13:25:43",post_modified_gmt:"2017-10-02 13:25:43",post_content_filtered:"",post_parent:0,guid:"http://streamiumtheme.com/?post_type=movie&#038;p=1191",menu_order:0,post_type:"movie",post_mime_type:"",comment_count:"0",filter:"raw"},search:[],is_home:"",is_archive:"",is_tax:"",is_search:"",tile_count:"6",read_more:"read more"},window.video_post_object={post_id:"1191",subTitle:"You're watching",title:"Vimeo Example",para:"",percentage:"0",codes:["https://vimeo.com/224650749"],brand_sliders:"#ef2930",brand_control:"#0a0a0a",brand_icons:"#f2f2f2",stream:"",youtube:"1",vpaid:"",poster:"http://streamiumtheme.com/wp-content/uploads/2017/09/216279717_1280x720-960x540.jpg",skip:"0",nonce:"e4f6c28114"},utils.renderPageTemplate("play",{},function(){LazyLoad.js(["js/s3bubble.js"],t)})},"#search":function(e,t){window.streamium_object={ajax_url:__data_api,recently_watched_api_nonce:"fabe7bad2e",custom_api_nonce:"d8617750b3",home_api_nonce:"ebe77de1ce",tax_api_nonce:"e204161a68",search_api_nonce:"8299bcafe3",extra_api_nonce:"fafb473689",query:null,search:{s:"action"},is_home:"",is_archive:"",is_tax:"",is_search:"1",tile_count:"6",read_more:"read more"},utils.renderPageTemplate("search",{},t)}},spaRouter=jQuery.extend({},router,{routes:spaRoutes});""!=window.location.hash&&"#"!=window.location.hash||(window.location.hash="#home"),spaRouter.init();