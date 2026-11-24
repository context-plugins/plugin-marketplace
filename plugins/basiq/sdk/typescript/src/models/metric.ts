import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultReportingReportsApiSchema,
  type ResultReportingReportsApi,
} from "./result-reporting-reports-api.js";

export type Metric = {
  /** Identifier for the metric */
  id?: string;
  /** Title of the metric */
  title?: string;
  /** Description of the metric */
  description?: string;
  sections?: string[];
  result?: ResultReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricSchema: Schema<Metric> = s.object<Metric>(
  {
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    description: s.optional(s.string()),
    sections: s.optional(s.array(s.string())),
    result: s.optional(s.lazy(() => resultReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
