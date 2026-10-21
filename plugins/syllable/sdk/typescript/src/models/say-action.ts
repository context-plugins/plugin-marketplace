import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action3, action3Schema } from "./action3.js";
import { Role, roleSchema } from "./role.js";
import { ifSchema, type If } from "./unions/if.js";

export type SayAction = {
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** Text to apply if the condition is true. */
  text: string;
  /** @default Action3.Say */
  action?: Action3;
  /** The role of the message. @default Role.Assistant */
  role?: Role;
};

export const sayActionSchema: Schema<SayAction> = s.object<SayAction>({
  if: s.optional(s.lazy(() => ifSchema)),
  text: s.string(),
  action: s.defaulted(action3Schema, Action3.Say),
  role: s.defaulted(roleSchema, Role.Assistant),
});
