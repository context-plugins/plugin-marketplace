import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeightedVariation = {
  variation: number;
  weight: number;
  untracked?: boolean;
};

export const weightedVariationSchema: Schema<WeightedVariation> = s.object<WeightedVariation>({
  variation: s.int(),
  weight: s.int(),
  untracked: s.optional(s.boolean()),
  _keysMap: {
    untracked: "_untracked",
  },
});
