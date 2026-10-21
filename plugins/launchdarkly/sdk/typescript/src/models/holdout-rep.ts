import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentSchema, type Experiment } from "./experiment.js";
import { relatedExperimentRepSchema, type RelatedExperimentRep } from "./related-experiment-rep.js";
import { status5Schema, type Status5 } from "./status5.js";

export type HoldoutRep = {
  id: string;
  status: Status5;
  description?: string;
  /** The percentage of traffic allocated to this holdout. */
  holdoutAmount: string;
  createdAt: number;
  updatedAt: number;
  baseExperiment: Experiment;
  experiments?: RelatedExperimentRep[];
};

export const holdoutRepSchema: Schema<HoldoutRep> = s.object<HoldoutRep>({
  id: s.string(),
  status: status5Schema,
  description: s.optional(s.string()),
  holdoutAmount: s.string(),
  createdAt: s.int(),
  updatedAt: s.int(),
  baseExperiment: experimentSchema,
  experiments: s.optional(s.array(s.lazy(() => relatedExperimentRepSchema))),
  _keysMap: {
    id: "_id",
  },
});
