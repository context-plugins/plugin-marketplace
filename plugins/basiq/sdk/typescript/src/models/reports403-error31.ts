import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data2ReportingReportsApiSchema,
  type Data2ReportingReportsApi,
} from "./data2-reporting-reports-api.js";

export type Reports403Error31 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data2ReportingReportsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reports403Error31Schema: Schema<Reports403Error31> = s.object<Reports403Error31>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => data2ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
