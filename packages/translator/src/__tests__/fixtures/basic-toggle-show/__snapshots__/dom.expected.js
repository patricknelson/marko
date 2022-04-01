import { queue as _queue, setConditionalRenderer as _setConditionalRenderer, write as _write, on as _on, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_show(_scope, show = _scope[5]) {
  _on(_scope, 4, "click", _scope[6]);
}

_register("packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_0", _hydrate_show);

const _onclick = function (_scope) {
  const show = _scope[5];

  _queue(_scope, _apply_show, 0, !show);
};

function _apply_show(_scope, show) {
  if (_write(_scope, 5, show)) {
    _setConditionalRenderer(_scope, 0, show ? _if : null);

    _write(_scope, 6, _bind(_scope, _onclick));

    _queueHydrate(_scope, _hydrate_show);
  }
}

function _apply(_scope) {
  _apply_show(_scope, true);
}

const _if = _createRenderer("Hello!", "", null);

export const template = "<div><!><button>Toggle</button></div>";
export const walks =
/* next(1), replace, skip(3), over(1), get, out(1) */
"D%+b l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);