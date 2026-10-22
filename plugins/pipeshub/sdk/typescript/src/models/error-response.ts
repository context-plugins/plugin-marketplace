import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Standard error envelope returned by all errors routed through `ErrorMiddleware`. Applies to all
 * `BaseError` subclasses including `HttpError`, `ValidationError`, and others. The `code` field is
 * a machine-readable string identifying the error type (e.g. `HTTP_UNAUTHORIZED`, `HTTP_NOT_FOUND`,
 * `VALIDATION_ERROR`, `INTERNAL_ERROR`).
 */
export type ErrorResponse = {
  error: Error;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: errorSchema,
});
