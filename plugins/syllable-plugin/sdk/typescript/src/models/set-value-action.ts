import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action, actionSchema } from "./action.js";
import { ifSchema, type If } from "./unions/if.js";
import { valueSchema, type Value } from "./unions/value.js";
import { valuefromSchema, type Valuefrom } from "./unions/valuefrom.js";

export type SetValueAction = {
  /** Initial value of the variable. */
  value?: Value;
  /**
   * Expression that computes the value. Supported expression forms: (1) JMESPath string (default
   * for plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or
   * (3) typed CEL object {"type":"cel","expression":"..."}. Mutually exclusive with value.
   */
  valueFrom?: Valuefrom;
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** @default Action.Set */
  action?: Action;
  /** Destination path to mutate (e.g. output.foo). */
  name: string;
};

export const setValueActionSchema: Schema<SetValueAction> = s.object<SetValueAction>({
  value: s.optional(s.lazy(() => valueSchema)),
  valueFrom: s.optional(s.lazy(() => valuefromSchema)),
  if: s.optional(s.lazy(() => ifSchema)),
  action: s.defaulted(actionSchema, Action.Set),
  name: s.string(),
});
