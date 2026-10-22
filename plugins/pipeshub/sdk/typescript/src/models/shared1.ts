import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Shared1 = {
  /** Allowed values for the `shared` filter */
  values?: string[];
  description?: string;
  /** Current value supplied by the caller, or null */
  current?: string | null;
  /** Whether this filter was applied on the request */
  applied?: boolean;
};

export const shared1Schema: Schema<Shared1> = s.object<Shared1>({
  values: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
