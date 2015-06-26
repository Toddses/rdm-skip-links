# Skip Links!

Simple skip link functionality for your website.

## Install

Bower!

```
$ bower install --save rdm-skip-links
```

## Usage

```
<a href="#" data-target="<selector>" data-offset="<offset>">Skip!</a>
```

* **data-target** - accepts any valid jQuery selector, or "top". Brings the given element to the top of the browser window, or the top of the document.
* **data-offset** - unitless integer. Offsets from the target element by the number of pixels given. Negative values are allowed.
