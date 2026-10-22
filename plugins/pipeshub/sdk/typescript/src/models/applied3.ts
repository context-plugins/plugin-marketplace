import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Applied3 = {
  /** Names of filters that were applied */
  filters?: string[];
  /** Map of applied filter name to its current value */
  values?: Record<string, unknown>;
};

export const applied3Schema: Schema<Applied3> = s.object<Applied3>({
  filters: s.optional(s.array(s.string())),
  values: s.optional(s.record(s.string(), s.unknown())),
});
