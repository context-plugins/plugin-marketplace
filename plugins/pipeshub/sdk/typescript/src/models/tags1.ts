import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tags1 = {
  /** Expected value type */
  type?: string;
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const tags1Schema: Schema<Tags1> = s.object<Tags1>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
