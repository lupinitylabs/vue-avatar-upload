# Vue Avatar Upload

This component is an opinionated fork of the [Vue Image Crop Upload Component](https://github.com/dai-siki/vue-image-crop-upload) by [@dai-siki](https://github.com/dai-siki) and allows the user to pick an image file, crop it visually and upload it to a backend endpoint.

Unlike the original component, this fork only supports Vue 3 and will not work with older versions of Vue. Also, at the current state, the main goal is to modernize the code base and thus also get rid of hacks that might be needed to support older browsers like IE10.

At the current point the usage is fully compatible with the original component, but unless version 1.0 is reached, this may be subject to change without further notice, particularly the naming of some parameters. 

>**Note**
> This component is currently under development and not ready for production-use. Use at your own risk.  

## Installation

This component is still a work in progress and is `not guaranteed to be production-ready`. It is not yet available via the `npmjs` registry, but it can be installed like this:

```bash
  npm install https://github.com/lupinitylabs/vue-avatar-upload
```

or

```bash
  yarn add https://github.com/lupinitylabs/vue-avatar-upload
```


## History 

This component started as an opinionated fork of the nice but seemingly abandoned [Vue Image Crop Upload Component](https://github.com/dai-siki/vue-image-crop-upload) by [@dai-siki](https://github.com/dai-siki), which accumulated several unfixed security issues due to a dated stack with lots of old dependencies as of late.

This fork moves the stack from a webpack and gulp workflow to Vite, migrates the code from the options API to the composition API and now uses Typescript (the migration is still a work in progress in some parts, feel free to shoot Pull Requests if you spot something!).

Unlike the original component, this fork does NOT support older versions of Vue. The goal is to minimize the code base and dependencies, remove everything that's not needed and hopefully end up with a lean component that just does this one task, and does it well.


## Roadmap

- [x] Move stack to Vite
- [x] Get rid of any outdated dependencies, especially those with security concerns
- [x] Migrate original code to composition API *(done: removed 140+ lines of obsolete code)*
- [x] Drop ripple effects
- [ ] Re-establish build chain for CSS from either the original SASS sources or PostCSS (currently the compiled css is shipped with this component).
- [ ] Re-build template and CSS to be responsive
- [ ] Make component mobile-ready
- [ ] Allow to customize styling (colors)
- [ ] Add dark mode
- [ ] Emit more lifecycle events, e.g. when the crop tool is ready. 
- [ ] Extract the steps to separate components
- [ ] Extract UI elements like the crop selector to separate components?
- [ ] Fix all code style inconsistencies, especially with the semicolons
- [ ] Add testing
- [ ] Publish in npmjs registry