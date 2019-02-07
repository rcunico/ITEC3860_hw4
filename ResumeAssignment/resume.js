//Used in main page and Ryan's resume
function hideShow(id)
    {
    var imgID = document.getElementById(id);

    if (imgID.style.display == 'none' || imgID.style.display == '')
        {
            imgID.style.display = 'block';
        }
    else
        {
            imgID.style.display = 'none';
        }
    }

function changeText(button)
    {
    var endText = button.innerHTML.substring(4);
    if (button.innerHTML.substring(0, 4).toString() == "Hide")
        {
        button.innerHTML = "Show " + endText;
        }
    else
        {
        button.innerHTML = "Hide " + endText;
        }
    }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction()
    {
    document.getElementById("dropdownItems").classList.toggle("show");
    }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event)
    {
    if (!event.target.matches('.dropbtn'))
        {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++)
            {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))
                {
                openDropdown.classList.remove('show');
                }
            }
        }
    };


//Used in Richard's resume
var text = 'Hide';

function setButtonNames()
    {
    document.getElementById("educationButton").innerHTML = text + ' Education';
    document.getElementById("hobbiesButton").innerHTML = text + ' Hobbies';
    }

function toggleDiv(divID, buttonName)
    {
    var x = document.getElementById(divID);
    var y = document.getElementById(buttonName);
    if (x.style.display == "none")
        {
        x.style.display = "block";
        text = 'Hide';
        y.innerText = text + y.innerText.substring(y.innerText.lastIndexOf(' '),y.innerText.length);
        }
    else
        {
        x.style.display = "none";
        text = 'Show';
        y.innerText = text + y.innerText.substring(y.innerText.lastIndexOf(' '),y.innerText.length);
        }
    }
