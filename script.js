$(document).ready(function() {
    $("#os-phrases > h2")
      .css("opacity", 1)
      .lettering("words") // Apply lettering to words
      .children("span")   // Get the child spans and apply lettering again
      .lettering()        // Apply lettering on characters inside words
      .children("span")   // Get the new spans inside characters
      .lettering();       // Apply lettering again if needed.
  });
  