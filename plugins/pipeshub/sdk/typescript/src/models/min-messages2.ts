import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Advertised in the `available` catalog but not currently applied as a filter by the server. */
export type MinMessages2 = {
  type?: string;
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const minMessages2Schema: Schema<MinMessages2> = s.object<MinMessages2>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
