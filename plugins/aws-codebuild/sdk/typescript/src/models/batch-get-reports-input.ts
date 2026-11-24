import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetReportsInput = {
  /** An array of ARNs that identify the Report objects to return. */
  reportArns: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetReportsInputSchema: Schema<BatchGetReportsInput> = s.object<BatchGetReportsInput>(
  {
    reportArns: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
