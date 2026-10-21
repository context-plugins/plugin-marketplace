import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowSchema, type Allow } from "./unions/allow.js";
import { allowgotostepSchema, type Allowgotostep } from "./unions/allowgotostep.js";
import { callSchema, type Call } from "./unions/call.js";

/** The tools configuration for the step. */
export type StepTools2 = {
  /** Whether to force immediate tool call without user interaction. */
  call?: Call;
  /** List of allowed tool names for this step. */
  allow?: Allow;
  /** Whether to expose the go_to_step escape hatch to the LLM. Defaults to disabled. */
  allowGoToStep?: Allowgotostep;
};

export const stepTools2Schema: Schema<StepTools2> = s.object<StepTools2>({
  call: s.optional(s.lazy(() => callSchema)),
  allow: s.optional(s.lazy(() => allowSchema)),
  allowGoToStep: s.optional(s.lazy(() => allowgotostepSchema)),
});
