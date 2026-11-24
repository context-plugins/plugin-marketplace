import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type QueueLimitErrorError = {
  success: boolean;
  error: Error7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queueLimitErrorErrorSchema: Schema<QueueLimitErrorError> = s.object<QueueLimitErrorError>(
  {
    success: s.boolean(),
    error: error7Schema,
  },
  { additionalProperties: s.json() },
);
