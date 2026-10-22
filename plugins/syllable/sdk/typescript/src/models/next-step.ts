import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ifSchema, type If } from "./unions/if.js";
import { requiresSchema, type Requires } from "./unions/requires.js";

/** Represents a conditional transition to the next step. */
export type NextStep = {
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** The identifier of the next step. */
  id: string;
  /**
   * List of input field names required for this transition. Validates that specified inputs are
   * collected before allowing transition.
   */
  requires?: Requires;
};

export const nextStepSchema: Schema<NextStep> = s.object<NextStep>({
  if: s.optional(s.lazy(() => ifSchema)),
  id: s.string(),
  requires: s.optional(s.lazy(() => requiresSchema)),
});
