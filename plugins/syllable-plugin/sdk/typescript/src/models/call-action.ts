import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action2, action2Schema } from "./action2.js";
import { argumentsSchema, type Arguments } from "./unions/arguments.js";
import { ifSchema, type If } from "./unions/if.js";
import { resultSchema, type Result } from "./unions/result.js";

export type CallAction = {
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** @default Action2.Call */
  action?: Action2;
  /** The name of the tool to call. */
  name: string;
  /** Optional arguments to pass to the tool (supports template strings) */
  arguments?: Arguments;
  /**
   * Optional deterministic result-capture configuration. When present, selected fields from the
   * tool response are saved into workflow state, so later transitions/conditions/validations can
   * branch on them without the model re-deriving them from tool call history. Currently applied
   * only when the call is routed in inject mode (arguments already complete); hinted/routed calls
   * are not yet supported.
   */
  result?: Result;
};

export const callActionSchema: Schema<CallAction> = s.object<CallAction>({
  if: s.optional(s.lazy(() => ifSchema)),
  action: s.defaulted(action2Schema, Action2.Call),
  name: s.string(),
  arguments: s.optional(s.lazy(() => argumentsSchema)),
  result: s.optional(s.lazy(() => resultSchema)),
});
