function hideShow(id)
    {
    var divID = document.getElementById(id);

    if (divID.style.display == "none")
        {
        divID.style.display = "block";
        }
    else
        {
        divID.style.display = "none";
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
    }
