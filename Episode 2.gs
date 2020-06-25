function myFunction() {
  
  const doc = DocumentApp.openById('1maMde8JZk_Tuc9qNt52Qpgj7zKDOBjqH9DgsOd77_To');
  
  Logger.log(doc.getHeader().getText());
//  Logger.log(doc.getBody());
//  Logger.log(doc.getFootnotes());
//  Logger.log(doc.getFooter());
}
