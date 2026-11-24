import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data2ReportingReportsApiSchema,
  type Data2ReportingReportsApi,
} from "./data2-reporting-reports-api.js";

export type ReportsTypes403Error1 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data2ReportingReportsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsTypes403Error1Schema: Schema<ReportsTypes403Error1> = s.object<ReportsTypes403Error1>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => data2ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
