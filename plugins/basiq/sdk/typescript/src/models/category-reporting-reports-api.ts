import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  anzsicReportingReportsApiSchema,
  type AnzsicReportingReportsApi,
} from "./anzsic-reporting-reports-api.js";

export type CategoryReportingReportsApi = {
  anzsic?: AnzsicReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryReportingReportsApiSchema: Schema<CategoryReportingReportsApi> =
  s.object<CategoryReportingReportsApi>(
    {
      anzsic: s.optional(s.lazy(() => anzsicReportingReportsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
