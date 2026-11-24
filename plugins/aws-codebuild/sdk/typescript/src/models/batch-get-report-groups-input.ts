import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetReportGroupsInput = {
  /** An array of report group ARNs that identify the report groups to return. */
  reportGroupArns: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetReportGroupsInputSchema: Schema<BatchGetReportGroupsInput> =
  s.object<BatchGetReportGroupsInput>(
    {
      reportGroupArns: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
