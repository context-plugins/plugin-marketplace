import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EvaluateField3 = {
  /** Name of the field to set when one or more masking rules match. */
  name?: string;
  /** JavaScript expression to compute the value (can be constant) */
  value: string;
};

export const evaluateField3Schema: Schema<EvaluateField3> = s.object<EvaluateField3>({
  name: s.optional(s.string()),
  value: s.string(),
});
