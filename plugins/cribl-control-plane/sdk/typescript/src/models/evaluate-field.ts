import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EvaluateField = {
  /** Name of the field to set or add to the event. */
  name?: string;
  /** JavaScript expression to compute the value (can be constant) */
  value: string;
};

export const evaluateFieldSchema: Schema<EvaluateField> = s.object<EvaluateField>({
  name: s.optional(s.string()),
  value: s.string(),
});
