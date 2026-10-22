import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ifSchema, type If } from "./unions/if.js";

export type ConditionalText = {
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
};

export const conditionalTextSchema: Schema<ConditionalText> = s.object<ConditionalText>({
  if: s.optional(s.lazy(() => ifSchema)),
  text: s.string(),
});
