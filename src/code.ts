import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    try {
        observer.next('hey');
        observer.next('how are you?');
        setInterval(() => {
           observer.next('fine')
        }, 2000);
        // observer.complete();
        // observer.next('this will not send');
    } catch(err) {
        observer.error(err);
    }
});

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed'));

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
