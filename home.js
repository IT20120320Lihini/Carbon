function search() {
 
    var name = document.getElementById("searchForm").elements["search-input"].value;
    var pattern = name.toLowerCase();
    var targetId = "";
  
    var words = document.getElementsByClassName("paragraph-body-container");
    for (var i = 0; i < words .length; i++) {
       var para = words[i].getElementsByTagName("p");
       var index = para[0].innerText.toLowerCase().indexOf(pattern);
       if (index != -1) {
          targetId = words[i].parentNode.id;
          document.getElementById(targetId).scrollIntoView();
          break;
       }
    }  
 }