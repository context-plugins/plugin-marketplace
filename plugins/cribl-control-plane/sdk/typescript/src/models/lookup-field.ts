import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LookupField = {
  /** Field name as it appears in events */
  eventField: string;
  /** Optional: The field name as it appears in the lookup file. Defaults to event field name */
  lookupField?: string;
};

export const lookupFieldSchema: Schema<LookupField> = s.object<LookupField>({
  eventField: s.string(),
  lookupField: s.optional(s.string()),
});
