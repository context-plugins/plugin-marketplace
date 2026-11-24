import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClearQueueResponse = {
  /** Indicates the queue was cleared successfully. */
  success: boolean;
  /** Number of queued tasks that were removed. */
  cleared: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clearQueueResponseSchema: Schema<ClearQueueResponse> = s.object<ClearQueueResponse>(
  {
    success: s.boolean(),
    cleared: s.int(),
  },
  { additionalProperties: s.json() },
);
