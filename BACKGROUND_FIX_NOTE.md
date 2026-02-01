# Background Recording Fixed (Web Worker)

**Problem:** Browsers stop drawing animations when the tab is hidden to save battery. This caused the video to freeze if you switched tabs.

**Solution:** I implemented a **Web Worker**.
- This is a separate background process that acts as a "Metronome".
- It forces the canvas to update exactly 30 times a second, **even if the tab is hidden**.

**Result:**
You can now minimize the window or browse other tabs while rendering. The video will clearly record in the background without freezing.

**Action:**
Refresh the page (check port 3004) and try rendering while multitasking!
