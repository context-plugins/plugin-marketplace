import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagEventExperimentSchema, type FlagEventExperiment } from "./flag-event-experiment.js";

export type FlagEventExperimentCollection = {
  /** The total number of experiments */
  totalCount: number;
  /** A list of experiments */
  items: FlagEventExperiment[];
};

export const flagEventExperimentCollectionSchema: Schema<FlagEventExperimentCollection> =
  s.object<FlagEventExperimentCollection>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => flagEventExperimentSchema)),
  });
