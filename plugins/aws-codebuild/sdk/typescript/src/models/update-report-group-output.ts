import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportGroupSchema, type ReportGroup } from "./report-group.js";

export type UpdateReportGroupOutput = {
  reportGroup?: ReportGroup;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateReportGroupOutputSchema: Schema<UpdateReportGroupOutput> =
  s.object<UpdateReportGroupOutput>(
    {
      reportGroup: s.optional(s.lazy(() => reportGroupSchema)),
    },
    { additionalProperties: s.json() },
  );
