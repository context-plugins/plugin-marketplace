import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowSchema, type Allow } from "./unions/allow.js";
import { allowgotostepSchema, type Allowgotostep } from "./unions/allowgotostep.js";
import { callSchema, type Call } from "./unions/call.js";

/** Configuration for tools available in a step. */
export type StepTools = {
  /** Whether to force immediate tool call without user interaction. */
  call?: Call;
  /** List of allowed tool names for this step. */
  allow?: Allow;
  /** Whether to expose the go_to_step escape hatch to the LLM. Defaults to disabled. */
  allowGoToStep?: Allowgotostep;
};

export const stepToolsSchema: Schema<StepTools> = s.object<StepTools>({
  call: s.optional(s.lazy(() => callSchema)),
  allow: s.optional(s.lazy(() => allowSchema)),
  allowGoToStep: s.optional(s.lazy(() => allowgotostepSchema)),
});
