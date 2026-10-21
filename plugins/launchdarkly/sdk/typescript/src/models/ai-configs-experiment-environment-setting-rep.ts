import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsExperimentEnabledPeriodRepSchema,
  type AiConfigsExperimentEnabledPeriodRep,
} from "./ai-configs-experiment-enabled-period-rep.js";

export type AiConfigsExperimentEnvironmentSettingRep = {
  startDate?: number;
  stopDate?: number;
  enabledPeriods?: AiConfigsExperimentEnabledPeriodRep[];
};

export const aiConfigsExperimentEnvironmentSettingRepSchema: Schema<AiConfigsExperimentEnvironmentSettingRep> =
  s.object<AiConfigsExperimentEnvironmentSettingRep>({
    startDate: s.optional(s.int()),
    stopDate: s.optional(s.int()),
    enabledPeriods: s.optional(s.array(s.lazy(() => aiConfigsExperimentEnabledPeriodRepSchema))),
  });
