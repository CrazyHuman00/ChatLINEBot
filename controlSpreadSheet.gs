// スプレッドシートを操作するファイル

/**
 * スプレッドシートに値を書き込む関数(ユーザの入力)
 * @param {sheet} sheet - データシート
 * @param {userPrompt} userPrompt - ユーザの入力
 */
function setCellValueUserPrompt(userPrompt) 
{
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var data = sheet.getRange("A1:A").getValues();
  var lastRow = data.filter(String).length;
  sheet.getRange(lastRow + 1,1).setValue(userPrompt);
}

/**
 * スプレッドシートに値を書き込む関数(ボットの応答)
 * @param {sheet} sheet - データシート
 * @param {botAnswer} botAnswer - ボットの応答
 */
function setCellValueBotAnswer(botAnswer) {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  var data = sheet.getRange("B1:B").getValues();
  var lastRow = data.filter(String).length;
  sheet.getRange(lastRow + 1,2).setValue(botAnswer);
}


function forgotData() 
{
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  
}

