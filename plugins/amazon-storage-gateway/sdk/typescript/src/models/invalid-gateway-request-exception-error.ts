import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storageGatewayErrorSchema, type StorageGatewayError } from "./storage-gateway-error.js";

export type InvalidGatewayRequestExceptionError = {
  /** A human-readable message describing the error that occurred. */
  message?: string;
  error?: StorageGatewayError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidGatewayRequestExceptionErrorSchema: Schema<InvalidGatewayRequestExceptionError> =
  s.object<InvalidGatewayRequestExceptionError>(
    {
      message: s.optional(s.string()),
      error: s.optional(s.lazy(() => storageGatewayErrorSchema)),
    },
    { additionalProperties: s.json() },
  );
