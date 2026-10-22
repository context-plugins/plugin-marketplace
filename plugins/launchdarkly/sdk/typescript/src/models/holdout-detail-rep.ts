import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentSchema, type Experiment } from "./experiment.js";
import { status5Schema, type Status5 } from "./status5.js";

export type HoldoutDetailRep = {
  id: string;
  status: Status5;
  description?: string;
  /** The percentage of traffic allocated to this holdout. */
  holdoutAmount: string;
  /** Indicates if the holdout experiment is running and if any related experiments are running. */
  isDirty?: boolean;
  createdAt: number;
  updatedAt: number;
  baseExperiment: Experiment;
  relatedExperiments?: Experiment[];
};

export const holdoutDetailRepSchema: Schema<HoldoutDetailRep> = s.object<HoldoutDetailRep>({
  id: s.string(),
  status: status5Schema,
  description: s.optional(s.string()),
  holdoutAmount: s.string(),
  isDirty: s.optional(s.boolean()),
  createdAt: s.int(),
  updatedAt: s.int(),
  baseExperiment: experimentSchema,
  relatedExperiments: s.optional(s.array(s.lazy(() => experimentSchema))),
  _keysMap: {
    id: "_id",
  },
});
