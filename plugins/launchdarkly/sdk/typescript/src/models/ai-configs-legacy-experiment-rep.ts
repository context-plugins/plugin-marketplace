import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsExperimentEnvironmentSettingRepSchema,
  type AiConfigsExperimentEnvironmentSettingRep,
} from "./ai-configs-experiment-environment-setting-rep.js";
import {
  aiConfigsMetricListingRepSchema,
  type AiConfigsMetricListingRep,
} from "./ai-configs-metric-listing-rep.js";

export type AiConfigsLegacyExperimentRep = {
  metricKey?: string;
  metric?: AiConfigsMetricListingRep;
  environments?: string[];
  environmentSettings?: Record<string, AiConfigsExperimentEnvironmentSettingRep>;
};

export const aiConfigsLegacyExperimentRepSchema: Schema<AiConfigsLegacyExperimentRep> =
  s.object<AiConfigsLegacyExperimentRep>({
    metricKey: s.optional(s.string()),
    metric: s.optional(s.lazy(() => aiConfigsMetricListingRepSchema)),
    environments: s.optional(s.array(s.string())),
    environmentSettings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => aiConfigsExperimentEnvironmentSettingRepSchema),
      ),
    ),
    _keysMap: {
      metric: "_metric",
      environmentSettings: "_environmentSettings",
    },
  });
