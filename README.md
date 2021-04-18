# Chromium audio `request.destination` bug

This repo contains a demo of a bug that occurs in Chromium browsers.

In the fetch handler of a service worker, the `request.destination` attribute of the fetch event is sometimes set to `video` for requests stemming from an HTML `<audio>` element.

This issue appears to only occur when the `preload` attribute is set to `metadata` or is omitted.

- [demo without `preload` attribute](https://mathisbullinger.github.io/chromium-audio-destination/)
- [demo with `preload="metadata"`](https://mathisbullinger.github.io/chromium-audio-destination?preload=metadata)
- [demo with `preload="none"`](https://mathisbullinger.github.io/chromium-audio-destination?preload=none)
- [demo with `preload="auto"`](https://mathisbullinger.github.io/chromium-audio-destination?preload=auto)
