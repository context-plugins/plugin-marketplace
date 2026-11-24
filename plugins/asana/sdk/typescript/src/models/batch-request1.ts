import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchRequestSchema, type BatchRequest } from "./batch-request.js";

export type BatchRequest1 = {
  /** A request object for use in a batch request. */
  data?: BatchRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRequest1Schema: Schema<BatchRequest1> = s.object<BatchRequest1>(
  {
    data: s.optional(s.lazy(() => batchRequestSchema)),
  },
  { additionalProperties: s.json() },
);
