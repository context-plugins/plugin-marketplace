import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Error payload returned by the legacy record-stream proxy when the downstream streaming request
 * fails after route middleware has passed.
 */
export type StreamRecordErrorResponse = {
  /** Human-readable error message from the gateway or downstream stream service */
  error: string;
};

export const streamRecordErrorResponseSchema: Schema<StreamRecordErrorResponse> =
  s.object<StreamRecordErrorResponse>({
    error: s.string(),
  });
