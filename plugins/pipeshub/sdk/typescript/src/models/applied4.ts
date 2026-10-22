import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Applied4 = {
  /** Names of the filters/parameters that were actually applied */
  filters?: string[];
  /** Map of applied filter name to the value that was applied */
  values?: Record<string, unknown>;
};

export const applied4Schema: Schema<Applied4> = s.object<Applied4>({
  filters: s.optional(s.array(s.string())),
  values: s.optional(s.record(s.string(), s.unknown())),
});
