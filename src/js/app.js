import { left } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" /> 
          <h1> ${variables.name == null ? "Monica" : variables.name} ${
    variables.lastname == null ? "Calle" : variables.lastname
  }</h1>
          
          <h2> ${
            variables.role == null
              ? "foreign languages teacher"
              : variables.role
          }</h2>
          <h3>${variables.country == null ? "Colombia" : variables.country} ${
    variables.city == null ? "Tulua" : variables.city
  }</h3>

    

          <ul class= "${variables.socialMediaPosition}"> 
            <li><a href="${
              variables.twitter == null
                ? "https://twitter.com/4geeksacademy"
                : variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github == "alesanchezr"
                ? "https://github.com/4geeksacademy"
                : variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin == null
                ? "https://linkedin.com/4geeksacademy"
                : variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram == null
                ? "https://instagram.com/4geeksacademy"
                : variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "http://cdn2.upsocl.com/wp-content/uploads/2018/10/Captura-de-pantalla-2018-10-03-a-las-10.20.12-1.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "data:image/jpeg;base64,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",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
