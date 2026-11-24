import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchSendStatusResultSchema, type BatchSendStatusResult } from "./batch-send-status-result.js";

/**
 * Response body for the batch send status endpoint. Results are returned in the same order as the
 * requested `sendIds`.
 */
export type BatchSendStatusResponse = {
  /** Per-send outcomes, in request order. */
  results: BatchSendStatusResult[];
};

export const batchSendStatusResponseSchema: Schema<BatchSendStatusResponse> =
  s.object<BatchSendStatusResponse>({
    results: s.array(s.lazy(() => batchSendStatusResultSchema)),
  });
