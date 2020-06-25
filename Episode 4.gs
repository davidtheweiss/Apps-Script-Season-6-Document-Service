function myFunction() {
  
  const doc = DocumentApp.openById('1maMde8JZk_Tuc9qNt52Qpgj7zKDOBjqH9DgsOd77_To');
  const body = doc.getBody();
  const text = "Their influence derive from classical works such as the Bible, Beowulf, and the litany of Shakespeare plays"
  
  const paragraph = body.getParagraphs()[9];
  
  //body.appendParagraph(paragraph);
  //body.insertParagraph(9, text)
  
  paragraph.setIndentFirstLine(36)
}
