import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action1, action1Schema } from "./action1.js";
import { ifSchema, type If } from "./unions/if.js";

export type IncrementAction = {
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** @default Action1.Inc */
  action?: Action1;
  /** Numeric destination path to increment. */
  name: string;
  /** Increment amount (defaults to 1). @default 1 */
  by?: number;
};

export const incrementActionSchema: Schema<IncrementAction> = s.object<IncrementAction>({
  if: s.optional(s.lazy(() => ifSchema)),
  action: s.defaulted(action1Schema, Action1.Inc),
  name: s.string(),
  by: s.defaulted(s.int(), 1),
});
