import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsExperimentEnabledPeriodRep = {
  startDate?: number;
  stopDate?: number;
};

export const aiConfigsExperimentEnabledPeriodRepSchema: Schema<AiConfigsExperimentEnabledPeriodRep> =
  s.object<AiConfigsExperimentEnabledPeriodRep>({
    startDate: s.optional(s.int()),
    stopDate: s.optional(s.int()),
  });
