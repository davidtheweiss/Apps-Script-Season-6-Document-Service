function myFunction() {
  
  const doc = DocumentApp.openById('1maMde8JZk_Tuc9qNt52Qpgj7zKDOBjqH9DgsOd77_To');
  const body = doc.getBody();
  const paragraph = body.getParagraphs()[8];
  const text = "Professor Plum ";
  
  //Logger.log(paragraph.getText());
  
  //paragraph.setText(text);
  
  //paragraph.editAsText().insertText(8, text);
  paragraph.editAsText().deleteText(8, 22);
}
