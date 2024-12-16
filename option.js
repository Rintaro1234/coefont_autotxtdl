document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("userInput");
    const saveButton = document.getElementById("saveButton");
  
    // 初期値をロード
    chrome.storage.sync.get(["userText"], (result) => {
      if (result.userText) {
        userInput.value = result.userText;
      }
    });
  
    // 保存ボタンのクリックイベント
    saveButton.addEventListener("click", () => {
      const text = userInput.value;
      chrome.storage.sync.set({ userText: text }, () => {
        alert("Settings saved!");
      });
    });
  });