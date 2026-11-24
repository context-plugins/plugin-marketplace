import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1ReportingReportsApiSchema,
  type Data1ReportingReportsApi,
} from "./data1-reporting-reports-api.js";

export type Reports400Error2 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data1ReportingReportsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reports400Error2Schema: Schema<Reports400Error2> = s.object<Reports400Error2>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data1ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
