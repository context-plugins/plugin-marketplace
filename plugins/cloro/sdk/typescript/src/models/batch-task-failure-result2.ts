import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error10Schema, type Error10 } from "./error10.js";

export type BatchTaskFailureResult2 = {
  /** Indicates this task failed. @default "False" */
  success?: "False";
  /** The zero-based position of this task in the original request array. */
  index: number;
  error: Error10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchTaskFailureResult2Schema: Schema<BatchTaskFailureResult2> =
  s.object<BatchTaskFailureResult2>(
    {
      success: s.defaulted(s.literal("False"), "False"),
      index: s.int(),
      error: error10Schema,
    },
    { additionalProperties: s.json() },
  );
