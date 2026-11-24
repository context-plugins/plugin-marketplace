import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { class2Schema, type Class2 } from "./class2.js";
import {
  divisionReportingReportsApiSchema,
  type DivisionReportingReportsApi,
} from "./division-reporting-reports-api.js";
import {
  group1ReportingReportsApiSchema,
  type Group1ReportingReportsApi,
} from "./group1-reporting-reports-api.js";
import {
  subdivisionReportingReportsApiSchema,
  type SubdivisionReportingReportsApi,
} from "./subdivision-reporting-reports-api.js";

export type AnzsicReportingReportsApi = {
  class?: Class2;
  division?: DivisionReportingReportsApi;
  group?: Group1ReportingReportsApi;
  subdivision?: SubdivisionReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anzsicReportingReportsApiSchema: Schema<AnzsicReportingReportsApi> =
  s.object<AnzsicReportingReportsApi>(
    {
      class: s.optional(s.lazy(() => class2Schema)),
      division: s.optional(s.lazy(() => divisionReportingReportsApiSchema)),
      group: s.optional(s.lazy(() => group1ReportingReportsApiSchema)),
      subdivision: s.optional(s.lazy(() => subdivisionReportingReportsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
