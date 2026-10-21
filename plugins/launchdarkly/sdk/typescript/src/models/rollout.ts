import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentAllocationRepSchema, type ExperimentAllocationRep } from "./experiment-allocation-rep.js";
import { weightedVariationSchema, type WeightedVariation } from "./weighted-variation.js";

export type Rollout = {
  variations: WeightedVariation[];
  experimentAllocation?: ExperimentAllocationRep;
  seed?: number;
  bucketBy?: string;
  contextKind?: string;
};

export const rolloutSchema: Schema<Rollout> = s.object<Rollout>({
  variations: s.array(s.lazy(() => weightedVariationSchema)),
  experimentAllocation: s.optional(s.lazy(() => experimentAllocationRepSchema)),
  seed: s.optional(s.int()),
  bucketBy: s.optional(s.string()),
  contextKind: s.optional(s.string()),
});
