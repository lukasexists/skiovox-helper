const SHORTCUTS_URL = "chrome://extensions/shortcuts"

if (!localStorage.setUpYetWithCtrlH) {
    chrome.windows.getLastFocused((window) => {
        // do not remove -- this is necessary for 2A users
        chrome.tabs.create({ windowId: window.id, url: SHORTCUTS_URL })
    });
    localStorage.setUpYetWithCtrlH = true
}