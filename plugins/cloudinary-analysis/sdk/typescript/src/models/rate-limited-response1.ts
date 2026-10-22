import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type RateLimitedResponse1 = {
  error?: ErrorObject | null;
  limits?: LimitsObject | null;
};

export const rateLimitedResponse1Schema: Schema<RateLimitedResponse1> = s.object<RateLimitedResponse1>({
  error: s.optionalNullable(s.lazy(() => errorObjectSchema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
});
