import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsLegacyExperimentRepSchema,
  type AiConfigsLegacyExperimentRep,
} from "./ai-configs-legacy-experiment-rep.js";

export type AiConfigsExperimentInfoRep = {
  baselineIdx: number;
  items: AiConfigsLegacyExperimentRep[];
};

export const aiConfigsExperimentInfoRepSchema: Schema<AiConfigsExperimentInfoRep> =
  s.object<AiConfigsExperimentInfoRep>({
    baselineIdx: s.int(),
    items: s.array(s.lazy(() => aiConfigsLegacyExperimentRepSchema)),
  });
