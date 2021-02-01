document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit = function(){
        const semester = document.querySelector('#semester').value
        const table = document.getElementById(semester)
        const newRow = document.createElement('tr')
        const subjCol = document.createElement('td')
        const delCol = document.createElement('td')
        const weightCol = document.createElement('td')
        const delBtn = document.createElement('button')
        const gradeCol = document.createElement('td')

        delBtn.innerHTML = 'x'
        delBtn.onclick = function(){
            table.removeChild(newRow)
        }
        let grade = document.createElement('span')
        grade = document.getElementById("gpa")
        let g = grade.options[grade.selectedIndex].text
        let weight = document.createElement('span')
        weight = document.querySelector("#weight").value
        let subjID = document.createElement("span")
        subjID = document.querySelector("#subID").value
        subjCol.append(subjID)
        delCol.append(delBtn)
        weightCol.append(weight)
        gradeCol.append(g)
        newRow.append(subjCol)
        newRow.append(weightCol)
        newRow.append(gradeCol)
        newRow.append(delCol)
        table.append(newRow)
        
        var newList = (Number(grade.value) * Number(weight))

        //per semester
        var gpasmt = "gpa" + semester
        var wsmt = "w" + semester
        var gpaPerSmt = document.getElementById(gpasmt).innerHTML
        var wPerSmt = document.getElementById(wsmt).innerHTML
        wPerSmt = Number(wPerSmt) + Number(weight)
        gpaPerSmt = Number(gpaPerSmt)
        gpaPerSmt = ((gpaPerSmt * (wPerSmt - weight)) + newList) / wPerSmt
        document.getElementById(gpasmt).innerHTML = String(gpaPerSmt)
        document.getElementById(wsmt).innerHTML = String(wPerSmt)

        //gpax
        var gpax = document.getElementById("gpax").innerHTML
        gpax = Number(gpax)
        var wx = document.getElementById("wx").innerHTML
        wx = Number(wx)
        gpax = Number(gpax)  * Number(wx)
        wx = Number(wx) + Number(weight)
        gpax = (Number(gpax) + Number(newList))/Number(wx)
        document.getElementById("gpax").innerHTML = String(gpax)
        document.getElementById("wx").innerHTML = String(wx)

        //gpaCPE
        var subjCheck = subjID.substr(0,3)
        if(subjCheck == "261" || subjCheck == "269"){
            var gpaComp = document.getElementById("gpacpe").innerHTML
            var wComp = document.getElementById("wcpe").innerHTML
            gpaComp = Number(gpaComp)
            wComp = Number(wComp)
            gpaComp = gpaComp * wComp
            wComp = wComp + Number(weight)
            gpaComp = (gpaComp + newList)/wComp
            document.getElementById("gpacpe").innerHTML = String(gpaComp)
            document.getElementById("wcpe").innerHTML = String(wComp)
        }

        return false
    }
})