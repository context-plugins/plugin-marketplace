import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { legacyExperimentRepSchema, type LegacyExperimentRep } from "./legacy-experiment-rep.js";

export type ExperimentInfoRep = {
  baselineIdx: number;
  items: LegacyExperimentRep[];
};

export const experimentInfoRepSchema: Schema<ExperimentInfoRep> = s.object<ExperimentInfoRep>({
  baselineIdx: s.int(),
  items: s.array(s.lazy(() => legacyExperimentRepSchema)),
});
