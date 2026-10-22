import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddField = {
  /** Name of the field to set when one or more scanning rules match. */
  name?: string;
  /** JavaScript expression to compute the value to assign to this field. */
  value: string;
};

export const addFieldSchema: Schema<AddField> = s.object<AddField>({
  name: s.optional(s.string()),
  value: s.string(),
});
