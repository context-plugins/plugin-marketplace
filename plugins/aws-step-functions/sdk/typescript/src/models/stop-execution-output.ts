import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopExecutionOutput = {
  /** The date the execution is stopped. */
  stopDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopExecutionOutputSchema: Schema<StopExecutionOutput> = s.object<StopExecutionOutput>(
  {
    stopDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
