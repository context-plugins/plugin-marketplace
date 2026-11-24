import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountReportingReportsApiSchema,
  type AccountReportingReportsApi,
} from "./account-reporting-reports-api.js";
import {
  groupReportingReportsApiSchema,
  type GroupReportingReportsApi,
} from "./group-reporting-reports-api.js";
import { metricSchema, type Metric } from "./metric.js";

export type DataReportingReportsApi = {
  metrics?: Metric[];
  groups?: GroupReportingReportsApi[];
  accounts?: AccountReportingReportsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataReportingReportsApiSchema: Schema<DataReportingReportsApi> =
  s.object<DataReportingReportsApi>(
    {
      metrics: s.optional(s.array(s.lazy(() => metricSchema))),
      groups: s.optional(s.array(s.lazy(() => groupReportingReportsApiSchema))),
      accounts: s.optional(s.array(s.lazy(() => accountReportingReportsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
