import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Error payload returned by the legacy record-stream proxy when the downstream streaming request
 * fails after route middleware has passed.
 */
export type StreamRecordErrorResponseError = {
  /** Human-readable error message from the gateway or downstream stream service */
  error: string;
};

export const streamRecordErrorResponseErrorSchema: Schema<StreamRecordErrorResponseError> =
  s.object<StreamRecordErrorResponseError>({
    error: s.string(),
  });
