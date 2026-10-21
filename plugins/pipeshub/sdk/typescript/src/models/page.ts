import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Page = {
  type?: string;
  current?: number;
  min?: number;
  max?: number;
  default?: number;
  description?: string;
  applied?: boolean;
};

export const pageSchema: Schema<Page> = s.object<Page>({
  type: s.optional(s.string()),
  current: s.optional(s.int()),
  min: s.optional(s.int()),
  max: s.optional(s.int()),
  default: s.optional(s.int()),
  description: s.optional(s.string()),
  applied: s.optional(s.boolean()),
});
