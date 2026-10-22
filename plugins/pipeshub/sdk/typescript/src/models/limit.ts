import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Limit = {
  type?: string;
  current?: number;
  min?: number;
  max?: number;
  default?: number;
  description?: string;
  applied?: boolean;
};

export const limitSchema: Schema<Limit> = s.object<Limit>({
  type: s.optional(s.string()),
  current: s.optional(s.int()),
  min: s.optional(s.int()),
  max: s.optional(s.int()),
  default: s.optional(s.int()),
  description: s.optional(s.string()),
  applied: s.optional(s.boolean()),
});
