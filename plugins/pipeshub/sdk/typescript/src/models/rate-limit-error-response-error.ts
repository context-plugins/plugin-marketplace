import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

/** Rate-limit error payload (shape differs from standard error responses). */
export type RateLimitErrorResponseError = {
  error: Error4;
};

export const rateLimitErrorResponseErrorSchema: Schema<RateLimitErrorResponseError> =
  s.object<RateLimitErrorResponseError>({
    error: error4Schema,
  });
