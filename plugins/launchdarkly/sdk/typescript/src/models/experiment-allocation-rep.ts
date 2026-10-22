import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExperimentAllocationRep = {
  defaultVariation: number;
  canReshuffle: boolean;
};

export const experimentAllocationRepSchema: Schema<ExperimentAllocationRep> =
  s.object<ExperimentAllocationRep>({
    defaultVariation: s.int(),
    canReshuffle: s.boolean(),
  });
