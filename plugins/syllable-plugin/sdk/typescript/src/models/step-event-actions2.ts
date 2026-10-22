import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enterSchema, type Enter } from "./unions/enter.js";
import { presubmitSchema, type Presubmit } from "./unions/presubmit.js";
import { start2Schema, type Start2 } from "./unions/start2.js";
import { submitSchema, type Submit } from "./unions/submit.js";

/** The events that trigger the actions to be executed. */
export type StepEventActions2 = {
  /** Actions to execute on the first input from the user. */
  start?: Start2;
  /** Actions to execute when entering a step (before collecting inputs). */
  enter?: Enter;
  /**
   * Actions to execute before validation (data-mutation only: set, inc, save). Use this to set
   * default values for required fields that would otherwise fail validation.
   */
  presubmit?: Presubmit;
  /** Actions to execute when the tool/step is submitted by the LLM. */
  submit?: Submit;
};

export const stepEventActions2Schema: Schema<StepEventActions2> = s.object<StepEventActions2>({
  start: s.optional(s.lazy(() => start2Schema)),
  enter: s.optional(s.lazy(() => enterSchema)),
  presubmit: s.optional(s.lazy(() => presubmitSchema)),
  submit: s.optional(s.lazy(() => submitSchema)),
});
