import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  experimentEnvironmentSettingRepSchema,
  type ExperimentEnvironmentSettingRep,
} from "./experiment-environment-setting-rep.js";
import { metricListingRepSchema, type MetricListingRep } from "./metric-listing-rep.js";

export type LegacyExperimentRep = {
  metricKey?: string;
  metric?: MetricListingRep;
  environments?: string[];
  environmentSettings?: Record<string, ExperimentEnvironmentSettingRep>;
};

export const legacyExperimentRepSchema: Schema<LegacyExperimentRep> = s.object<LegacyExperimentRep>({
  metricKey: s.optional(s.string()),
  metric: s.optional(s.lazy(() => metricListingRepSchema)),
  environments: s.optional(s.array(s.string())),
  environmentSettings: s.optional(
    s.record(
      s.string(),
      s.lazy(() => experimentEnvironmentSettingRepSchema),
    ),
  ),
  _keysMap: {
    metric: "_metric",
    environmentSettings: "_environmentSettings",
  },
});
