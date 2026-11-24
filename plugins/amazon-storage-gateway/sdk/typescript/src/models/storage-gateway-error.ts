import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type StorageGatewayError = {
  /** Additional information about the error. */
  errorCode?: ErrorCode;
  /** Human-readable text that provides detail about the error that occurred. */
  errorDetails?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storageGatewayErrorSchema: Schema<StorageGatewayError> = s.object<StorageGatewayError>(
  {
    errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    errorDetails: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
