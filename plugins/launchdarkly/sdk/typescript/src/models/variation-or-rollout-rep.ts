import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rolloutSchema, type Rollout } from "./rollout.js";

export type VariationOrRolloutRep = {
  /** The index of the variation, from the array of variations for this flag */
  variation?: number;
  rollout?: Rollout;
};

export const variationOrRolloutRepSchema: Schema<VariationOrRolloutRep> = s.object<VariationOrRolloutRep>({
  variation: s.optional(s.int()),
  rollout: s.optional(s.lazy(() => rolloutSchema)),
});
