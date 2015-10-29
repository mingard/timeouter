'usestrict';

var tasks=[];

var task=function(method){
    var self=this;
    method.func=(function(func){
        return function() {
            func.apply(func, null);
            if(Boolean(tasks.indexOf(method)+1)) {
                self.timeout = setTimeout(method.func, method.timeout);
            }
        };
    })(method.func);

    tasks.push(method);
    self.method=method;

    this.remove=function() {
        clearTimeout(this.timeout);
        if ( Boolean(tasks.indexOf(method)+1) ) {
            tasks.splice(tasks.indexOf(method),1);
        }
    };
    method.func();
    return this;
};

function add(method) {
    if(method && method.timeout && method.func) {
        return new task(method);
    } else {
        return;
    }
}

function get() {
  return tasks;
}

module.exports.add=add;
module.exports.get=get;