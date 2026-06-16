let jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        title: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 2,
        company: "Ardi Sols",
        title: "Frontend Developer",
        location: "Remote",
        type: "Flexible",
        salary: "$112,000-$145,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 3,
        company: "Coldtech Solutions",
        title: "Web-App Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$100,000-$190,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 4,
        company: "RainScope Solutions",
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$150,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 5,
        company: "InfyMe Tech",
        title: "Tester",
        location: "Remote",
        type: "Part-time",
        salary: "$70,000-$175,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 6,
        company: "Tonect Com",
        title: "Vu Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$190,000-$290,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 7,
        company: "Slovia Technologies",
        title: "Backend Developer",
        location: "Remote",
        type: "Flexible",
        salary: "$100,000-$115,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
    {
        id: 8,
        company: "Gen Ai Spark",
        title: "Next Native Developer",
        location: "WFH",
        type: "Full-time",
        salary: "$125,000-$160,000",
        description: "Build cross-platform mobile applications...",
        status: "not applied"
    },
];

let totalJobs = document.getElementById("total-jobs")
let interviewed = document.getElementById("interviewed")
let rejected = document.getElementById("rejected")

function countJobswithStats(status) {
    let count = 0
    jobs.forEach(job => {
        if (job.status === status) {
            count++
        }
    });
    return count

}
function updateCounts() {
    let interviewCount = countJobswithStats("interview")
    let rejectCount = countJobswithStats("rejected")
    totalJobs.innerHTML = jobs.length
    interviewed.innerHTML = interviewCount
    rejected.innerHTML = rejectCount
}
updateCounts()

function interviewClickHandler(jobId) {
    let job = jobs.find(j => j.id === jobId)
    job.status = "interview"
    updateCounts()
    let appliedStatus = document.getElementById("status-" + jobId)
    appliedStatus.innerHTML = "INTERVIEWED"
}
document.getElementById("interview-btn-1").addEventListener("click", function () {
    interviewClickHandler(1)
})
document.getElementById("interview-btn-2").addEventListener("click", function () {
    interviewClickHandler(2)
})
document.getElementById("interview-btn-3").addEventListener("click", function () {
    interviewClickHandler(3)
})
document.getElementById("interview-btn-4").addEventListener("click", function () {
    interviewClickHandler(4)
})
document.getElementById("interview-btn-5").addEventListener("click", function () {
    interviewClickHandler(5)
})
document.getElementById("interview-btn-6").addEventListener("click", function () {
    interviewClickHandler(6)
})
document.getElementById("interview-btn-7").addEventListener("click", function () {
    interviewClickHandler(7)
})
document.getElementById("interview-btn-8").addEventListener("click", function () {
    interviewClickHandler(8)
})
function rejectClickHandler(jobId) {
    let job = jobs.find(j => j.id === jobId)
    job.status = "rejected"
    updateCounts()
    let appliedStatus = document.getElementById("status-" + jobId)
    appliedStatus.innerHTML = "REJECTED"
}
document.getElementById("rejected-btn-1").addEventListener("click", function () {
    rejectClickHandler(1)
})
document.getElementById("rejected-btn-2").addEventListener("click", function () {
    rejectClickHandler(2)
})
document.getElementById("rejected-btn-3").addEventListener("click", function () {
    rejectClickHandler(3)
})
document.getElementById("rejected-btn-4").addEventListener("click", function () {
    rejectClickHandler(4)
})
document.getElementById("rejected-btn-5").addEventListener("click", function () {
    rejectClickHandler(5)
})
document.getElementById("rejected-btn-6").addEventListener("click", function () {
    rejectClickHandler(6)
})
document.getElementById("rejected-btn-7").addEventListener("click", function () {
    rejectClickHandler(7)
})
document.getElementById("rejected-btn-8").addEventListener("click", function () {
    rejectClickHandler(8)
})

let activeTab = "all"

function showHideJobs() {
  let hasJobs = false  // Tracker for jobs
  
  for(let i = 1; i <= 8; i++) {
    let card = document.getElementById(String(i))
    let job = jobs.find(j => j.id === i)
    
    if(!job) {
            card.style.display = "none"
            continue
        }

    if(activeTab === "all") {
      card.style.display = "flex"
      hasJobs = true  //  "All" section
    }
    else if(activeTab === "interview" && job.status === "interview") {
      card.style.display = "flex"
      hasJobs = true  // interview section
    }
    else if(activeTab === "rejected" && job.status === "rejected") {
      card.style.display = "flex"
      hasJobs = true  // Rejects section
    }
    else {
      card.style.display = "none"
    }
  }
  
  let noJobsMessage = document.getElementById("nojobsprv")
  if(activeTab !== "all" && !hasJobs) {
    noJobsMessage.classList.remove("hidden")  
  } else {
    noJobsMessage.classList.add("hidden")   
  }
}


document.getElementById("all-btn").addEventListener("click", function() {
  activeTab = "all"
  showHideJobs()
})

document.getElementById("int-btn").addEventListener("click", function() {
  activeTab = "interview"
  showHideJobs()
})

document.getElementById("rej-btn").addEventListener("click", function() {
  activeTab = "rejected"
  showHideJobs()
})


function interviewClickHandler(jobId) {
    let job = jobs.find(j => j.id === jobId)
    job.status = "interview"
    updateCounts()
    let appliedStatus = document.getElementById("status-" + jobId)
    appliedStatus.innerHTML = "INTERVIEWED"
    showHideJobs() 
}


function rejectClickHandler(jobId) {
    let job = jobs.find(j => j.id === jobId)
    job.status = "rejected"
    updateCounts()
    let appliedStatus = document.getElementById("status-" + jobId)
    appliedStatus.innerHTML = "REJECTED"
    showHideJobs() 
}

function deleteJobs(jobId){
    let jobIndex=jobs.findIndex(j=> j.id===jobId)
    if(jobIndex !==-1){
        jobs.splice(jobIndex,1)
    }
    updateCounts()
    showHideJobs()
}
for(let i=1;i<=8;i++){
    let delBtn=document.getElementById("del-" + i)
    if (delBtn){
         delBtn.addEventListener("click",function(){
         deleteJobs(i)
         })
    }
}



showHideJobs()