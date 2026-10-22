import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterRule1 = {
  /** JavaScript expression applied to Pod objects. Return 'true' to include it. */
  filter: string;
  /** Optional description of this rule's purpose */
  description?: string;
};

export const filterRule1Schema: Schema<FilterRule1> = s.object<FilterRule1>({
  filter: s.string(),
  description: s.optional(s.string()),
});
