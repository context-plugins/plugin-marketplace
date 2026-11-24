import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  batchSeatAssignmentsRequestAssignmentsItemsSchema,
  type BatchSeatAssignmentsRequestAssignmentsItems,
} from "./batch-seat-assignments-request-assignments-items.js";

export type BatchSeatAssignmentsRequest = {
  assignments: BatchSeatAssignmentsRequestAssignmentsItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchSeatAssignmentsRequestSchema: Schema<BatchSeatAssignmentsRequest> =
  s.object<BatchSeatAssignmentsRequest>(
    {
      assignments: s.array(s.lazy(() => batchSeatAssignmentsRequestAssignmentsItemsSchema)),
    },
    { additionalProperties: s.json() },
  );
