_hoverLogoEventListener()
{
    document.addEventListener('mouseover', function(event) {
        try {
            if (event.target != 'path' && event.target != 'svg' && event.target.className == 'size modal-item' 
                && behamics.boxes["Home Page"].countHover == 0) {

                var payload = {
                    bhmid: null,
                    eventType: "hover",
                    eventSource: "logo",
                    data: [],
                    action: null,
                    getMessage: true
                }
                behamics._isDataValid(payload.data)
                behamics._sendRequestToServer("Home Page", payload);
                behamics.boxes["Home Page"].countHover++;
            }

        } catch (e) {
            behamics._reportErrorToServer(e, "DOM");
        }

    });
}