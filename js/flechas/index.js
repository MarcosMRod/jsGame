export const activarFlechas = () =>
  document.addEventListener("keydown", (e) => {
    document.getElementById(e.key).focus();

    //  switch (document.activeElemen){}
    if (document.getElementById("w") === document.activeElement) {
      document.getElementById("player").style.transform = "translateY(-200px)";
      setTimeout(
        () =>
          (document.getElementById("player").style.transform = "translateY(0)"),
        500
      );
    }
    if (document.getElementById("s") === document.activeElement) {
      document.getElementById("player").style.transform = "translateY(200px)";
      setTimeout(
        () =>
          (document.getElementById("player").style.transform = "translateY(0)"),
        500
      );
    }
    if (document.getElementById("a") === document.activeElement) {
      document.getElementById("player").style.transform = "translateX(-200px)";
      setTimeout(
        () =>
          (document.getElementById("player").style.transform = "translateX(0)"),
        500
      );
    }
    if (document.getElementById("d") === document.activeElement) {
      document.getElementById("player").style.transform = "translateX(200px)";
      setTimeout(
        () =>
          (document.getElementById("player").style.transform = "translateX(0)"),
        500
      );
    }
  });
