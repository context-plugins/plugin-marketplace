import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action4, action4Schema } from "./action4.js";
import { ifSchema, type If } from "./unions/if.js";
import { inputsSchema, type Inputs } from "./unions/inputs.js";
import { name1Schema, type Name1 } from "./unions/name1.js";

export type SaveAction = {
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** @default Action4.Save */
  action?: Action4;
  /** Target name to save (defaults to global variable). */
  name?: Name1;
  /** Input field names to persist; None saves all collected inputs. */
  inputs?: Inputs;
};

export const saveActionSchema: Schema<SaveAction> = s.object<SaveAction>({
  if: s.optional(s.lazy(() => ifSchema)),
  action: s.defaulted(action4Schema, Action4.Save),
  name: s.optional(s.lazy(() => name1Schema)),
  inputs: s.optional(s.lazy(() => inputsSchema)),
});
