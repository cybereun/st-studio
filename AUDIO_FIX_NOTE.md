# Audio Graph & Rendering Fix

I have applied a critical fix for the "No Sound" and "0% Progress" issues.

**Technical Explanation:**
In development mode ("Strict Mode"), the application initializes twice. 
The previous code closed the audio engine on the first cleanup. 
However, the HTML Audio Element `<audio>` remains connected to the *closed* engine.
When the app initializes the second time, it tries to connect the same `<audio>` element to a NEW engine, which browsers strictly forbid, causing the audio system to crash silently.

**The Fix:**
I updated `StudioPhase.tsx` to:
1.  **Prevent closing the Audio Engine** during component updates. It now stays alive.
2.  **Check connection status** before trying to connect the audio element.
3.  **Wait for Playback:** The rendering process now explicitly waits for the music to *actually start playing* before proceeding.

**Verification Steps:**
1.  **Refresh your browser page.** (Important to clear old broken state)
2.  Upload a music file.
3.  Go to the Studio.
4.  Click Play. You should hear sound.
5.  Click "Render Video". The progress bar should now move.
