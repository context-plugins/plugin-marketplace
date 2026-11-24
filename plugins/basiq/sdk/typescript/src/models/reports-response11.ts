import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1ReportingReportsApiSchema,
  type Datum1ReportingReportsApi,
} from "./datum1-reporting-reports-api.js";

export type ReportsResponse11 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1ReportingReportsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsResponse11Schema: Schema<ReportsResponse11> = s.object<ReportsResponse11>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum1ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
