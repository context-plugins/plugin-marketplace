import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

/** Rate-limit error payload (shape differs from standard error responses). */
export type RateLimitErrorResponse = {
  error: Error4;
};

export const rateLimitErrorResponseSchema: Schema<RateLimitErrorResponse> = s.object<RateLimitErrorResponse>({
  error: error4Schema,
});
