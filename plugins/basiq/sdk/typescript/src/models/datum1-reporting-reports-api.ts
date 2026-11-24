import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  titleReportingReportsApiSchema,
  type TitleReportingReportsApi,
} from "./title-reporting-reports-api.js";

export type Datum1ReportingReportsApi = {
  /** Application-specific error code, expressed as a string value. */
  code: string;
  /** Title of the error */
  title?: TitleReportingReportsApi;
  /** Type of the response, always "error" */
  type: string;
  /** Connection source has to be web or open banking. */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1ReportingReportsApiSchema: Schema<Datum1ReportingReportsApi> =
  s.object<Datum1ReportingReportsApi>(
    {
      code: s.string(),
      title: s.optional(s.lazy(() => titleReportingReportsApiSchema)),
      type: s.string(),
      detail: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
