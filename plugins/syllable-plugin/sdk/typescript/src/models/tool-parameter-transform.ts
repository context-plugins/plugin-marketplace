import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action6, action6Schema } from "./action6.js";
import { format2Schema, type Format2 } from "./unions/format2.js";
import { value4Schema, type Value4 } from "./unions/value4.js";
import { whenSchema, type When } from "./unions/when.js";

/**
 * A transform to be applied to the value of a tool parameter.
 *
 * Either `value` or `format` must be set:
 * - `value` is any arbitrary value: string, list or dictionary.
 * - `format` is a string composed of other parameters or context variables.
 */
export type ToolParameterTransform = {
  /**
   * The action to perform on the tool parameter value: `default` means only set the value (using
   * the `format` field) if the parameter doesn't exist or is empty, `override` means always set the
   * value," and `remove` means "remove the parameter value."
   *
   * @default Action6.Default
   */
  action?: Action6;
  /** Only apply the transform if the condition is met. */
  when?: When;
  /** The default value to use for the parameter. */
  value?: Value4;
  /**
   * The string value to use for the parameter. The value will be evaluated with the Python
   * `str.format` method, for example, `Hello, {name}!`
   */
  format?: Format2;
};

export const toolParameterTransformSchema: Schema<ToolParameterTransform> = s.object<ToolParameterTransform>({
  action: s.defaulted(action6Schema, Action6.Default),
  when: s.optional(s.lazy(() => whenSchema)),
  value: s.optional(s.lazy(() => value4Schema)),
  format: s.optional(s.lazy(() => format2Schema)),
});
