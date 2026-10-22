import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LookupField1 = {
  /** Name of the field to set or add to the event. */
  name?: string;
  /** JavaScript expression to compute the value (can be constant) */
  expr: string;
  /** Set to No to disable the evaluation of an individual expression */
  disabled?: boolean;
};

export const lookupField1Schema: Schema<LookupField1> = s.object<LookupField1>({
  name: s.optional(s.string()),
  expr: s.string(),
  disabled: s.optional(s.boolean()),
});
