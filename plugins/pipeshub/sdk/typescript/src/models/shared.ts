import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Shared = {
  /** Accepted values for the `shared` query param. */
  values?: string[];
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const sharedSchema: Schema<Shared> = s.object<Shared>({
  values: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
