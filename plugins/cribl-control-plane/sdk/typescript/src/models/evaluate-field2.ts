import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EvaluateField2 = {
  /** Name of the field to set or add to the event. */
  name?: string;
  /** JavaScript expression to compute the value (can be constant) */
  value: string;
  /** Set to No to disable the evaluation of an individual expression */
  disabled?: boolean;
};

export const evaluateField2Schema: Schema<EvaluateField2> = s.object<EvaluateField2>({
  name: s.optional(s.string()),
  value: s.string(),
  disabled: s.optional(s.boolean()),
});
