import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteReportInput = {
  /** The ARN of the report to delete. */
  arn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteReportInputSchema: Schema<DeleteReportInput> = s.object<DeleteReportInput>(
  {
    arn: s.string(),
  },
  { additionalProperties: s.json() },
);
