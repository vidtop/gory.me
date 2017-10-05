(function (doT) {
    var templates = {};
    var scripts = Array.prototype.slice.call(document.getElementsByTagName('script')); // load all scripts
    for (var i = 0; i < scripts.length; i++) { // filter out template script tags
        var script = scripts[i];
        if (script.type == "text/x-dot-template") {
            var name = script.id || script.getAttribute('name') || script.getAttribute('data-name');
            templates[name] = script.innerHTML; // store template for later use
            script.parentNode.removeChild(script); // remove template from DOM
        }
    }
    window.render = window.render || {};
    var cache = window.render;
    /**
     * Get template function by name.
     */
    // doT.getTmpl = function(url, name, cb){
    //     if(templates[name]) {
    //         console.log('template ready:' + name);
    //         return cb && cb(templates[name]);
    //     }
    //     console.log('template not ready:' + name);
    //     jQuery.get(url, function(data){
    //         templates[name] = data;
    //         cb && cb(templates[name]);
    //     })
    // }
    // doT.toString = function(name){
    //     return templates[name];
    // }
    // doT.isCache = function(name){
    //     return templates[name]?true:false;
    // }
    doT.tmpl = function (name, cb) {
        if (!cache[name])
            cache[name] = templates[name] && doT.template(templates[name], undefined, {});
        return cache[name];
    };
    /**
     * Render template with provided data.
     */
    // doT.render = function (name, data) {
    //     var tmpl = doT.tmpl(name, undefined, {});
    //     if (!tmpl)
    //         return undefined;
    //     return tmpl(data);
    // };
})(window.doT);
