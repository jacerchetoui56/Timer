const time = document.querySelector(".timer");
      const startbtn = document.querySelector(".start");
      const stopbtn = document.querySelector(".stop");
      const resetbtn = document.querySelector(".reset");

      let seconds = 0;
      let count = false; //this checks if the timer is ON or not

      startbtn.addEventListener("click", start);
      stopbtn.addEventListener("click", stop);
      resetbtn.addEventListener("click", reset);

      function timer() {
        seconds++;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - hours * 3600) / 60);
        let secs = seconds % 60;

        if(minutes < 10) minutes = '0' + minutes; 
        if(hours < 10) hours = '0' + hours; 
        if(secs < 10) secs = '0' + secs; 
        time.textContent = `${hours}:${minutes}:${secs}`;
      }

      function start() {
        if (count) return; //if the timer in already ON , we're not gonna change it
        time.classList.toggle("animateStart")
        time.classList.remove('animateStop')
        count = setInterval(timer, 1000); //we'll update the timer every second
      }
      function stop() {
        clearInterval(count); //we'll stop the setInterval function which is handled by the variable 'count'
        count = false; //the timer is not ON
        time.classList.remove("animateStart")
        if(seconds!=0) time.classList.toggle("animateStop")

      }
      function reset() {
        const resetTimer = confirm("are you sure to reset the timer!")
        if(resetTimer){
          stop();
          seconds = 0;
          time.classList.remove("animateStart")
          time.classList.remove("animateStop")
          time.textContent = "00:00:00"

        }
      }