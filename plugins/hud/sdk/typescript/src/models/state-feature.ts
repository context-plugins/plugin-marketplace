import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** One observation feature group: per-dimension labels + values. */
export type StateFeature = {
  names?: string[];
  values?: number[];
};

export const stateFeatureSchema: Schema<StateFeature> = s.object<StateFeature>({
  names: s.optional(s.array(s.string())),
  values: s.optional(s.array(s.float64())),
});
