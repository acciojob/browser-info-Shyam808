window.onload = function() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let version = "Unknown";

  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    browserName = "Chrome";
    version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  } else if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
    version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([\d.]+)/)[1];
  } else if (userAgent.includes("Edg")) {
    browserName = "Edge";
    version = userAgent.match(/Edg\/([\d.]+)/)[1];
  }

  const infoDiv = document.getElementById("browser-info");
  infoDiv.textContent = `You are using ${browserName} version ${version}`;
};
