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
    var cache = {};
    /**
     * Get template function by name.
     */
    doT.getTmp = function(url, name, cb){
        if(templates[name]) {
            console.log('template ready:' + name);
            return cb && cb(templates[name]);
        }
        console.log('template not ready:' + name);
        jQuery.get(url, function(data){
            templates[name] = data;
            cb && cb(templates[name]);
        })
    }
    doT.toString = function(name){
        return templates[name];
    }
    doT.isCache = function(name){
        return templates[name]?true:false;
    }
    doT.tmpl = function (name, config, def) {
        if (!templates[name])
            throw new Error("template \"" + name + "\" not found!");
        if (!cache[name])
            cache[name] = doT.template(templates[name], config, def);
        return cache[name];
    };
    /**
     * Render template with provided data.
     */
    doT.render = function (name, data) {
        var tmpl = doT.tmpl(name, undefined, {});
        if (!tmpl)
            return undefined;
        return tmpl(data);
    };
})(window.doT);
