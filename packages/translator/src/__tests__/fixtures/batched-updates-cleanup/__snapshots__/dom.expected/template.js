import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$ifBody = /* @__PURE__ */_closure(1, 3, [], (_scope, message) => _data(_scope[0], message));
const _ifBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_message$ifBody]);
const _if = /* @__PURE__ */_conditional(1, 1, (_scope, show = _scope[2]) => show ? _ifBody : null);
const _message = /* @__PURE__ */_source(3, [/* @__PURE__ */_inConditionalScope(_message$ifBody, 1)]);
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show", _scope => _on(_scope[0], "click", function () {
  const show = _scope[2];
  _queueSource(_scope, _message, "bye");
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_source(2, [_if], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _setup = _scope => {
  _setSource(_scope, _show, true);
  _setSource(_scope, _message, "hi");
};
export const template = "<button></button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);