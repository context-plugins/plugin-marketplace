import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

export type BatchRequest = {
  operations: Operation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchRequestProperties: s.Shape<BatchRequest> = {
  operations: s.array(s.lazy(() => operationSchema)),
};

export const batchRequestInternalSchema: Schema<BatchRequest> = s.object<BatchRequest>(
  batchRequestProperties,
  { additionalProperties: s.json() },
);

export const batchRequestSchema: Schema<BatchRequest> = s.lazySchema(() =>
  s.object<BatchRequest>(
    {
      ...batchRequestProperties,
      operations: s.array(s.lazy(() => operationSchema)).check(s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
