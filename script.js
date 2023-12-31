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
    if (r1Text == "") {
        document.getElementById('r1Btn').style.display = "none";
    }
    else {
        document.getElementById('r1Btn').innerHTML = r1Text;
    }

    var r2Text = sessionStorage.getItem('r2Text');
    if (r2Text == "") {
        document.getElementById('r2Btn').style.display = "none";
    }
    else {
        document.getElementById('r2Btn').innerHTML = r2Text;
    }

    var r3Text = sessionStorage.getItem('r3Text');
    if (r3Text == "") {
        document.getElementById('r3Btn').style.display = "none";
    }
    else {
        document.getElementById('r3Btn').innerHTML = r3Text;
    }

    var fcrText = sessionStorage.getItem('fcrText');
    if (fcrText == "") {
        document.getElementById('fcrBtn').style.display = "none";
    }
    else {
        document.getElementById('fcrBtn').innerHTML = fcrText;
    }

    var trText = sessionStorage.getItem('trText');
    if (trText == "") {
        document.getElementById('trBtn').style.display = "none";
    }
    else {
        document.getElementById('trBtn').innerHTML = trText;
    }

    var demandText = sessionStorage.getItem('demandText');
    if (demandText == "") {
        document.getElementById('demandBtn').style.display = "none";
    }
    else {
        document.getElementById('demandBtn').innerHTML = demandText;
    }

    var compText = sessionStorage.getItem('compText');
    if (compText == "") {
        document.getElementById('compBtn').style.display = "none";
    }
    else {
        document.getElementById('compBtn').innerHTML = compText;
    }
    
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
                sessionStorage.setItem(`${btnId}_TotalClicks`, totalCount);
                sessionStorage.setItem(`${btnId}_Percentage`, percentage);

                //FinalPrint function to display results
                //finalPrint()

                const resultContainer = document.getElementById('resultContainer');
                const resultDiv = document.createElement('div')
                resultDiv.innerHTML = `<p><b>Button ${btnId}:</b></p>
                                       <p>Total Clicks: ${totalCount}</p>
                                       <p>Percentage: ${percentage}%</p>
                                      `;
                resultContainer.appendChild(resultDiv);
                
            }
        }

        button.addEventListener('click', handleBtnClick);

        const intervalId = setInterval(checkBtnClicks, intervalDuration);
    }

    function finalPrint() {
        const resultContainer = document.getElementById('resultContainer');
        const btnIds = ['r1Btn', 'r2Btn', 'r3Btn', 'fcrBtn', 'trBtn', 'demandBtn', 'compBtn'];

        //go through each btn to print results
        let i = 0;
        while (i < btnIds.length) {
            const btnId = btnIds[i];
            const totalClicks = sessionStorage.getItem(`${btnId}_TotalClicks`);
            const percentage = sessionStorage.getItem(`${btnId}_Percentage`);

            // div element for each btn results
            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `<p>Button ${btnId}:</p>
                                   <p>Total Clicks: ${totalClicks}</p>
                                   <p>Percentage: ${percentage}%</p>
                                   `;
            
            //append results to resultContainer
            resultContainer.appendChild(resultDiv);

            //increment loop
            i++;
        }
    }

    //.........SETUP BUTTONS..........//
    setupBtnInterval('r1Btn', totalMilliseconds);
    setupBtnInterval('r2Btn', totalMilliseconds);
    setupBtnInterval('r3Btn', totalMilliseconds);
    setupBtnInterval('fcrBtn', totalMilliseconds);
    setupBtnInterval('trBtn', totalMilliseconds);
    setupBtnInterval('demandBtn', totalMilliseconds);
    setupBtnInterval('compBtn', totalMilliseconds);
}