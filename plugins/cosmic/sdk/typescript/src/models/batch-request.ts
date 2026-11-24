import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchOperationSchema, type BatchOperation } from "./batch-operation.js";

export type BatchRequest = {
  operations: BatchOperation[];
};

const batchRequestProperties: s.Shape<BatchRequest> = {
  operations: s.array(s.lazy(() => batchOperationSchema)),
};

export const batchRequestInternalSchema: Schema<BatchRequest> =
  s.object<BatchRequest>(batchRequestProperties);

export const batchRequestSchema: Schema<BatchRequest> = s.lazySchema(() =>
  s.object<BatchRequest>({
    ...batchRequestProperties,
    operations: s.array(s.lazy(() => batchOperationSchema)).check(s.minLength(1), s.maxLength(25)),
  }),
);
