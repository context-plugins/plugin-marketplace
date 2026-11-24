import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum5ReportingReportsApiSchema,
  type Datum5ReportingReportsApi,
} from "./datum5-reporting-reports-api.js";
import {
  links2ReportingReportsApiSchema,
  type Links2ReportingReportsApi,
} from "./links2-reporting-reports-api.js";

export type ReportsResponse2 = {
  /** Always "list". */
  type?: string;
  /** Count of items in the response. */
  count?: number;
  /** Size of the pages in the response. */
  size?: number;
  data?: Datum5ReportingReportsApi[];
  links?: Links2ReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsResponse2Schema: Schema<ReportsResponse2> = s.object<ReportsResponse2>(
  {
    type: s.optional(s.string()),
    count: s.optional(s.int()),
    size: s.optional(s.int()),
    data: s.optional(s.array(s.lazy(() => datum5ReportingReportsApiSchema))),
    links: s.optional(s.lazy(() => links2ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
