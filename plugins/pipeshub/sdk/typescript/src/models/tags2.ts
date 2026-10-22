import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Advertised in the `available` catalog but not currently applied as a filter by the server. */
export type Tags2 = {
  type?: string;
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const tags2Schema: Schema<Tags2> = s.object<Tags2>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
