import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MinMessages1 = {
  type?: string;
  description?: string;
  current?: number | null;
  applied?: boolean;
};

export const minMessages1Schema: Schema<MinMessages1> = s.object<MinMessages1>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.int()),
  applied: s.optional(s.boolean()),
});
