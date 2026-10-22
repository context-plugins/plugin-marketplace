import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

/**
 * Standard JSON error envelope from `ErrorMiddleware` for `BaseError` subclasses
 * (`error.middleware.ts`). Returned for most API 4xx errors (unauthorized, forbidden, not found,
 * validation failures, etc.).
 */
export type ApplicationJsonErrorResponseError = {
  error: Error3;
};

export const applicationJsonErrorResponseErrorSchema: Schema<ApplicationJsonErrorResponseError> =
  s.object<ApplicationJsonErrorResponseError>({
    error: error3Schema,
  });
