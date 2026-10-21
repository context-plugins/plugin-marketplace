import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExperimentEnabledPeriodRep = {
  startDate?: number;
  stopDate?: number;
};

export const experimentEnabledPeriodRepSchema: Schema<ExperimentEnabledPeriodRep> =
  s.object<ExperimentEnabledPeriodRep>({
    startDate: s.optional(s.int()),
    stopDate: s.optional(s.int()),
  });
