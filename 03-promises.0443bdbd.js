!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var a=r("iU1Pc");function l(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault(),formElements=n.currentTarget.elements,delayValue=1e3*Number(formElements.delay.value),stepValue=1e3*Number(formElements.step.value),amountValue=Number(formElements.amount.value);for(var t=1;t<=amountValue;t+=1)l(t,delayValue).then((function(n){var t=n.position,o=n.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(a).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),delayValue+=stepValue}))}();
//# sourceMappingURL=03-promises.0443bdbd.js.map
