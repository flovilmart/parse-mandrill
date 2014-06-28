var Parse = require("parse-cloud-additions").Parse;
function UsersAPI(parent){
    this.parent = parent;
}

UsersAPI.prototype.info = function (callback){
    return this.parent.execute("users/info.json", {}, callback);
};

UsersAPI.prototype.ping = function (callback){
    return this.parent.execute("users/ping.json", {}, callback);
};

UsersAPI.prototype.ping2 = function(callback){
    return this.parent.execute("users/ping2.json", {}, callback);
};

UsersAPI.prototype.senders = function(callback){
    return this.parent.execute("users/senders.json", callback);
};




function MessagesAPI(parent) {
    this.parent = parent;
}
MessagesAPI.prototype.send = function(params, callback) {
    return this.parent.execute("messages/send.json", params, callback);
};
MessagesAPI.prototype.sendTemplate = function(params, callback){
    return this.parent.execute("messages/send-template.json", params, callback);
};
MessagesAPI.prototype.search = function(params, callback){
    return this.parent.execute("messages/search.json", params, callback);
};
MessagesAPI.prototype.parse = function(params, callback){
    return this.parent.execute("messages/parse.json", params, callback);
};
MessagesAPI.prototype.sendRaw = function(params, callback){
    return this.parent.execute("messages/send-raw.json", params, callback);
};


function TagsAPI(parent){
    this.parent = parent;
}
TagsAPI.prototype.list = function(params, callback){
    return this.parent.execute("tags/list.json", params, callback);
};
TagsAPI.prototype.delete = function(params, callback){
    return this.parent.execute("tags/delete.json", params, callback);
};

TagsAPI.prototype.info = function(params, callback){
    return this.parent.execute("tags/info.json", params, callback);
};

TagsAPI.prototype.timeSeries = function(params, callback){
    return this.parent.execute("tags/time-series.json", params, callback);
};

TagsAPI.prototype.allTimeSeries = function(params, callback){
    return this.parent.execute("tags/all-time-series.json", params, callback);
};


/**

https://mandrillapp.com/api/docs/rejects.html

*/

function RejectsAPI(parent){
    this.parent = parent;
}
RejectsAPI.prototype.add = function(params, callback){
    return this.parent.execute("rejects/add.json", params, callback);
}
RejectsAPI.prototype.list= function(params, callback){
    return this.parent.execute("rejects/list.json", params, callback);
};
RejectsAPI.prototype.delete= function(params, callback){
    return this.parent.execute("rejects/delete.json", params, callback);
};

function WhitelistsAPI(parent){
    this.parent = parent;
}

WhitelistsAPI.prototype.add = function(params, callback){
    return this.parent.execute("whitelists/add.json", params, callback);
};
WhitelistsAPI.prototype.list= function(params, callback){
    return this.parent.execute("whitelists/list.json", params, callback);
};
WhitelistsAPI.prototype.delete= function(params, callback){
    return this.parent.execute("whitelists/delete.json", params, callback);
};

/*

    https://mandrillapp.com/api/docs/senders.html

*/
function SendersAPI(parent){
    this.parent = parent;
}

SendersAPI.prototype.list= function(params, callback){
    return this.parent.execute("senders/list.json", params, callback);
};
SendersAPI.prototype.domains= function(params, callback){
    return this.parent.execute("senders/domains.json", params, callback);
};
SendersAPI.prototype.info= function(params, callback){
    return this.parent.execute("senders/info.json", params, callback);
};
SendersAPI.prototype.timeSeries= function(params, callback){
    return this.parent.execute("senders/time-series.json", params, callback);
};

/*

    https://mandrillapp.com/api/docs/urls.html

*/

function URLsAPI(parent){
    this.parent = parent;
}

URLsAPI.prototype.list= function(params, callback){
    return this.parent.execute("urls/list.json", params, callback);
};

URLsAPI.prototype.search= function(params, callback){
    return this.parent.execute("urls/search.json", params, callback);
};

URLsAPI.prototype.timeSeries= function(params, callback){
    return this.parent.execute("urls/time-series.json", params, callback);
};

/*

    https://mandrillapp.com/api/docs/templates.html

*/

function TemplatesAPI(parent){
    this.parent = parent;
}

TemplatesAPI.prototype.add = function(params, callback){
    return this.parent.execute("templates/add.json", params, callback);
};

TemplatesAPI.prototype.info = function(params, callback){
    return this.parent.execute("templates/info.json", params, callback);
};

TemplatesAPI.prototype.update = function(params, callback){
    return this.parent.execute("templates/update.json", params, callback);
};

TemplatesAPI.prototype.publish = function(params, callback){
    return this.parent.execute("templates/publish.json", params, callback);
};

TemplatesAPI.prototype.delete = function(params, callback){
    return this.parent.execute("templates/delete.json", params, callback);
};

TemplatesAPI.prototype.list = function(params, callback){
    return this.parent.execute("templates/list.json", params, callback);
};

TemplatesAPI.prototype.timeSeries = function(params, callback){
    return this.parent.execute("templates/time-series.json", params, callback);
};

TemplatesAPI.prototype.render = function(params, callback){
    return this.parent.execute("templates/render.json", params, callback);
};

/*

    https://mandrillapp.com/api/docs/webhooks.html

*/


function WebhooksAPI(parent){
    this.parent = parent;
}

WebhooksAPI.prototype.list = function(params, callback){
    return this.parent.execute("webhooks/list.json", params, callback);
};

WebhooksAPI.prototype.add = function(params, callback){
    return this.parent.execute("webhooks/add.json", params, callback);
};

WebhooksAPI.prototype.info = function(params, callback){
    return this.parent.execute("webhooks/info.json", params, callback);
};

WebhooksAPI.prototype.update = function(params, callback){
    return this.parent.execute("webhooks/update.json", params, callback);
};

WebhooksAPI.prototype.delete = function(params, callback){
    return this.parent.execute("webhooks/delete.json", params, callback);
};

function InboundAPI(parent){
    this.parent = parent;
}

InboundAPI.prototype.domains = function(params, callback){
    return this.parent.execute("inbound/domains.json", params, callback);
};

InboundAPI.prototype.routes = function(params, callback){
    return this.parent.execute("inbound/routes.json", params, callback);
};

InboundAPI.prototype.sendRaw = function(params, callback){
    return this.parent.execute("inbound/send-raw.json", params, callback);
};


function MandrillAPI (api_key, options){

    if (!options)
        options = {};

    this.version     = '1.0';
    this.apiKey      = api_key;
    this.secure      = options.secure || true;
    this.packageInfo = options.packageInfo;
    this.httpHost    = 'mandrillapp.com';
    this.httpUri     = (this.secure ? 'https://'+this.httpHost+':443' : 'http://'+this.httpHost+':80' ) +'/api/1.0/';
    this.userAgent   = options.userAgent+' ' || '';
    this.users       = new UsersAPI(this);
    this.messages     = new MessagesAPI(this);
    this.tags        = new TagsAPI(this);
    this.rejects     = new RejectsAPI(this);
    this.whitelists  = new WhitelistsAPI(this);
    this.senders     = new SendersAPI(this);
    this.urls        = new URLsAPI(this);
    this.templates   = new TemplatesAPI(this);
    this.webhooks    = new WebhooksAPI(this);
    this.inbound     = new InboundAPI(this);
}


MandrillAPI.initialize = function(apiKey){
    MandrillAPI._instance = new MandrillAPI(apiKey);
}

MandrillAPI.sendEmail = function(params, options){
    return MandrillAPI._instance.messages.send(params, options);
}

module.exports = MandrillAPI;

MandrillAPI.prototype.execute = function(method, params, callback){
    params.key = this.apiKey;
    var options = {
        url: this.httpUri+method,
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(params)
    };

    var cb = {
        success: function(){},
        error: function(){}
    }
    if (typeof callback == 'function') {
        cb.success = callback;
        cb.error = callback;
    }else if(typeof callback === 'object'){
        if (callback.success) {
            cb.success = callback.success;
        }
        if (callback.error) {
            cb.error = callback.error;
        }
    }
   
     // Setup a promise 
    var promise = new Parse.Promise();
    // Handle errors
    var _errorCallback = function(httpResponse){
        var response =JSON.parse(httpResponse.responseText);

        if (response && response.status == "error") {
            promise.reject(response);
            cb.error(response);
        }else{
            promise.reject(httpResponse);
            cb.error(httpResponse)
        }
        
    };

    // Handle 2xx success with a sanity check
    var _successCallback = function(httpResponse){
        var error;

        if (httpResponse.error) {
            error = httpResponse.error;
        }
        var response = httpResponse.response;
        // Do sanity check with the status (Mandrill specific)
        if (response && response.status == "error") {
            error = response;
        }
        // Replace by text in case...
        if (!response) {
            response = httpResponse.text;
        }

        if (!error) {
            cb.success(response)
            promise.resolve(response);
        }else{
            cb.error(error);
            promise.reject(error);
        }
    };


    Parse.Cloud.httpRequest(options).then(_successCallback,_errorCallback);
    return promise;
};


