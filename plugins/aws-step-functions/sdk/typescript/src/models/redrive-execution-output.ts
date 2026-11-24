import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RedriveExecutionOutput = {
  /** The date the execution was last redriven. */
  redriveDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redriveExecutionOutputSchema: Schema<RedriveExecutionOutput> = s.object<RedriveExecutionOutput>(
  {
    redriveDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
