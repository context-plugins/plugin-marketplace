import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResponseSchema, type BatchResponse } from "./batch-response.js";

export type BatchResponse1 = {
  data?: BatchResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResponse1Schema: Schema<BatchResponse1> = s.object<BatchResponse1>(
  {
    data: s.optional(s.array(s.lazy(() => batchResponseSchema))),
  },
  { additionalProperties: s.json() },
);
