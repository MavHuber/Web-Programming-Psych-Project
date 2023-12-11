//..........SAVE INPUTS TO SESSION STORAGE...........//
function saveVar() {
    var vidName = document.getElementById('name').value;
    sessionStorage.setItem('vidName', vidName);

    var sessNum = document.getElementById('session').value;
    sessionStorage.setItem('sessNum', sessNum);

    var vidLen = document.getElementById('length').value;
    sessionStorage.setItem('vidLen', vidLen);
    
    var r1Text = document.getElementById('r1').value;
    sessionStorage.setItem('r1Text', r1Text);

    var r2Text = document.getElementById('r2').value;
    sessionStorage.setItem('r2Text', r2Text);

    var r3Text = document.getElementById('r3').value;
    sessionStorage.setItem('r3Text', r3Text);

    var fcrText = document.getElementById('fcr').value;
    sessionStorage.setItem('fcrText', fcrText);

    var trText = document.getElementById('tr').value;
    sessionStorage.setItem('trText', trText);

    var demandText = document.getElementById('demand').value;
    sessionStorage.setItem('demandText', demandText);

    var compText = document.getElementById('compliance').value;
    sessionStorage.setItem('compText', compText);
}

//.........START SESSION.........//
function startSession() {
    //........LABEL BUTTONS WITH INPUTS..........//
    var vidNameText = sessionStorage.getItem('vidName');
    document.getElementById('vidNameText').innerHTML = "Video name: " + vidNameText;

    var sessNumText = sessionStorage.getItem('sessNum');
    document.getElementById('sessNumDisplay').innerHTML = "Session number: " + sessNumText;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r2Text = sessionStorage.getItem('r2Text');
    document.getElementById('r2Btn').innerHTML = r2Text;

    var r3Text = sessionStorage.getItem('r3Text');
    document.getElementById('r3Btn').innerHTML = r3Text;

    var fcrText = sessionStorage.getItem('fcrText');
    document.getElementById('fcrBtn').innerHTML = fcrText;

    var trText = sessionStorage.getItem('trText');
    document.getElementById('trBtn').innerHTML = trText;

    var demandText = sessionStorage.getItem('demandText');
    document.getElementById('demandBtn').innerHTML = demandText;

    var compText = sessionStorage.getItem('compText');
    document.getElementById('compBtn').innerHTML = compText;
    
    //.............TOTAL DURATION................//
    var totalMin = sessionStorage.getItem('vidLen');
    const totalMilliseconds = totalMin * 60000;

    //...........SETUP INTERVAL............//
    function setupBtnInterval(btnId, totalDuration) {
        let clickCount = 0;
        let totalCount = 0;
        let didClickHappen = 0;
        let intervalCount = 0;
        const intervalDuration = 10000; // 10 seconds in milliseconds
        const intervals = totalDuration / intervalDuration;
        const button = document.getElementById(btnId);

        function handleBtnClick() {
            clickCount++;
            totalCount++;
        }

        function checkBtnClicks() {
            console.log(`Interval ${intervalCount + 1}: Clicks for  ${btnId} - ${clickCount}`);
            intervalCount++;
        
            // if the clickCount stays at 0 that means the button had been pressed at least once
            if (clickCount != 0) {
                didClickHappen++;
            }
        
            clickCount = 0; // Reset click count for the next interval

            // check if all intervals are completed
            if (intervalCount == intervals) {
                clearInterval(intervalId);
                console.log(`Total Clicks for ${btnId}: ${totalCount}`);
                const percentage = (didClickHappen / intervals) * 100;
                console.log(`Button ${btnId} pressed in ${percentage}% of intervals.`);

                // Store the results in variables for later use
                sessionStorage.setItem(`${btnId}_TotalClicks`, totalClicks);
                sessionStorage.setItem(`${btnId}_Percentage`, percentage);
            }
        }

        button.addEventListener('click', handleBtnClick);

        const intervalId = setInterval(checkBtnClicks, intervalDuration);
    }

    //.........SETUP BUTTONS..........//
    setupBtnInterval('r1Btn', );
    setupBtnInterval('r2Btn', );
    setupBtnInterval('r3Btn', );
    setupBtnInterval('fcrBtn', );
    setupBtnInterval('trBtn', );
    setupBtnInterval('demandBtn', );
    setupBtnInterval('compBtn', );
}