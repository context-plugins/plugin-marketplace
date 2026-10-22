import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type RateLimitedResponse = {
  error?: ErrorObject | null;
  limits?: LimitsObject | null;
};

export const rateLimitedResponseSchema: Schema<RateLimitedResponse> = s.object<RateLimitedResponse>({
  error: s.optionalNullable(s.lazy(() => errorObjectSchema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
});
