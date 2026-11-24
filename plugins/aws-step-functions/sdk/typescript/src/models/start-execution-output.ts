import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartExecutionOutput = {
  /** The Amazon Resource Name (ARN) that identifies the execution. */
  executionArn: string;
  /** The date the execution is started. */
  startDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startExecutionOutputSchema: Schema<StartExecutionOutput> = s.object<StartExecutionOutput>(
  {
    executionArn: s.string(),
    startDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
