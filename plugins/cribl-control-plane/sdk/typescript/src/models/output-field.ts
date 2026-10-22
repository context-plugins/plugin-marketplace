import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutputField = {
  /** The field name as it appears in the lookup file */
  lookupField: string;
  /** Optional: Field name to add to event. Defaults to lookup field name. */
  eventField?: string;
  /** Optional: Value to assign if lookup entry is not found */
  defaultValue?: string;
};

export const outputFieldSchema: Schema<OutputField> = s.object<OutputField>({
  lookupField: s.string(),
  eventField: s.optional(s.string()),
  defaultValue: s.optional(s.string()),
});
