import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterRule2 = {
  /** JavaScript expression applied to Journal objects. Return 'true' to include it. */
  filter: string;
  /** Optional description of this rule's purpose */
  description?: string;
};

export const filterRule2Schema: Schema<FilterRule2> = s.object<FilterRule2>({
  filter: s.string(),
  description: s.optional(s.string()),
});
