import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type BatchTaskFailureResult = {
  /** Indicates this task failed. @default "False" */
  success?: "False";
  /** The zero-based position of this task in the original request array. */
  index: number;
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchTaskFailureResultSchema: Schema<BatchTaskFailureResult> = s.object<BatchTaskFailureResult>(
  {
    success: s.defaulted(s.literal("False"), "False"),
    index: s.int(),
    error: error2Schema,
  },
  { additionalProperties: s.json() },
);
