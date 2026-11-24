import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

/** Results in request order. Operations succeed or fail independently, so check each `status`. */
export type BatchResponse = {
  operations: Operation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResponseSchema: Schema<BatchResponse> = s.object<BatchResponse>(
  {
    operations: s.array(s.lazy(() => operationSchema)),
  },
  { additionalProperties: s.json() },
);
