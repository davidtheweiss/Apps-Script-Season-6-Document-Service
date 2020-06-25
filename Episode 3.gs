function myFunction() {
  
  const doc = DocumentApp.openById('1maMde8JZk_Tuc9qNt52Qpgj7zKDOBjqH9DgsOd77_To');
  const body = doc.getBody();
  
  //Logger.log(body.findText("West[^a-zA-Z]").getElement().asText().getText())
  body.replaceText("{name}", "David Weiss");
}
