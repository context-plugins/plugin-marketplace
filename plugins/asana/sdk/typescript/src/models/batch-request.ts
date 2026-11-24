import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchRequestActionSchema, type BatchRequestAction } from "./batch-request-action.js";

/** A request object for use in a batch request. */
export type BatchRequest = {
  actions?: BatchRequestAction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRequestSchema: Schema<BatchRequest> = s.object<BatchRequest>(
  {
    actions: s.optional(s.array(s.lazy(() => batchRequestActionSchema))),
  },
  { additionalProperties: s.json() },
);
