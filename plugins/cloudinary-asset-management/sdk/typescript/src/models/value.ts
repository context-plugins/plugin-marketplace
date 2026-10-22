import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Value = {
  /** The value being aggregated */
  value?: string;
  /** The count of resources with this value */
  count?: number;
};

export const valueSchema: Schema<Value> = s.object<Value>({
  value: s.optional(s.string()),
  count: s.optional(s.int()),
});
