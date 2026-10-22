import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  experimentEnabledPeriodRepSchema,
  type ExperimentEnabledPeriodRep,
} from "./experiment-enabled-period-rep.js";

export type ExperimentEnvironmentSettingRep = {
  startDate?: number;
  stopDate?: number;
  enabledPeriods?: ExperimentEnabledPeriodRep[];
};

export const experimentEnvironmentSettingRepSchema: Schema<ExperimentEnvironmentSettingRep> =
  s.object<ExperimentEnvironmentSettingRep>({
    startDate: s.optional(s.int()),
    stopDate: s.optional(s.int()),
    enabledPeriods: s.optional(s.array(s.lazy(() => experimentEnabledPeriodRepSchema))),
  });
