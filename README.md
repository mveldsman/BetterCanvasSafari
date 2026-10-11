# Better Canvas for Safari — Mac

An unofficial macOS Safari port of [Better Canvas](https://github.com/UseBetterCanvas/bettercanvas) 5.12.6. Upstream code and assets are credited to the Better Canvas contributors and retain their AGPL-3.0 license. This source project can be built locally without an Apple developer certificate.

## Build from source

Requires a Mac with Xcode installed. Open **Better Canvas for Safari.xcodeproj**, select the **Better Canvas for Safari** scheme and **My Mac**, then choose **Product → Run**. For a local development build without a developer certificate, select **Sign to Run Locally** for both targets in Signing & Capabilities.

## Enable it

1. Run the app from Xcode once, or move the built app to Applications and open it there.
2. In Safari, open **Settings → Advanced** and enable **Show features for web developers** (older Safari calls this “Show Develop menu in menu bar”).
3. In Safari’s **Develop** menu, enable **Allow Unsigned Extensions**. On versions that place it under **Develop → Developer Settings**, use that location.
4. Open **Safari → Settings → Extensions**, enable **Better Canvas**, and allow access to your school’s Canvas website.
5. Visit your Canvas dashboard and reload it. Click Better Canvas in Safari’s toolbar to open its settings.

Safari may require Allow Unsigned Extensions to be enabled again after restarting Safari. This development build has not been signed or notarized for distribution.

## Verify on Canvas

Check the popup opens, dark mode toggles, preferences survive a page reload, and the todo list, dashboard grades, GPA calculator, and assignment previews work with your courses. Your signed-in Canvas site was not accessed during the build; these features still need a live check. Theme browsing depends on Better Canvas’s existing external service. Chrome settings do not automatically transfer to Safari.

## Source and rebuilding

This repository contains the complete Xcode project and extension resources, including the upstream AGPL-3.0 license. Open its `.xcodeproj` to edit it. For a signed build, choose your Apple development team for both the app and extension targets, and keep the app/extension bundle identifiers consistent.

The only JavaScript change guards the unsupported uninstall callback. The generated project’s app bundle identifier was corrected to match the extension identifier prefix. The popup root has an explicit width and its decorative gradient stays within the page bounds to prevent a blank strip in Safari. The upstream interface and features are retained.

Upstream: https://github.com/UseBetterCanvas/bettercanvas
Source revision: c7d8bad4e6c2c10589f07e4497e0080a8cc2825a

Verification: Apple converter completed without manifest warnings; Xcode Debug build succeeded; background compatibility tests passed. This is not a claim that all Canvas features have been verified in Safari.

To run the regression tests with Node, from the project folder:

```sh
node Tests/background.test.cjs 'Better Canvas for Safari Extension/Resources/js/background.js'
```
