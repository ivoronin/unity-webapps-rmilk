window.Unity = external.getUnityObject(1.0);

function updateCount() {
    if ( document.querySelector('div#tasks') ) {
        spans = document.querySelectorAll('div#tasks span.taskduetoday');
        if ( spans ) {
            count = spans.length;
            if ( count > 0 )
                Unity.Launcher.setCount(count);
            else
                Unity.Launcher.clearCount();
        }
    }
}

function unityReady() {
    updateCount();
    setInterval(wrapCallback(updateCount), 5000);
}

Unity.init({
    name: 'Remember The Milk',
    domain: 'rememberthemilk.com',
    iconUrl: 'https://www.rememberthemilk.com/img/gears/desktop_128x128.png',
    onInit: wrapCallback(unityReady)
});
