import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataReportingReportsApiSchema, type DataReportingReportsApi } from "./data-reporting-reports-api.js";
import { filter2Schema, type Filter2 } from "./filter2.js";
import {
  links4ReportingReportsApiSchema,
  type Links4ReportingReportsApi,
} from "./links4-reporting-reports-api.js";

export type ReportsResponse3 = {
  /** Type of the report */
  type?: string;
  /** Unique identifier for the report */
  id?: string;
  /** Title of the report */
  title?: string;
  /** Type of the report */
  reportType?: string;
  /** Date and time when the report was created */
  createdDate?: Date;
  /** Creator of the report */
  createdBy?: string;
  filters?: Filter2[];
  data?: DataReportingReportsApi;
  /** Link to retrieve the transactions for the account */
  transactions?: string;
  links?: Links4ReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsResponse3Schema: Schema<ReportsResponse3> = s.object<ReportsResponse3>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    reportType: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    filters: s.optional(s.array(s.lazy(() => filter2Schema))),
    data: s.optional(s.lazy(() => dataReportingReportsApiSchema)),
    transactions: s.optional(s.string()),
    links: s.optional(s.lazy(() => links4ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
