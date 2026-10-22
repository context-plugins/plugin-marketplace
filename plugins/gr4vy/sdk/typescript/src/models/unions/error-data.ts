import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureErrorSchema, type ThreeDSecureError } from "../three-dsecure-error.js";

/**
 * The error data received from our 3DS server. This will not be populated if the customer failed
 * the authentication with a status code of `N`, `R`, or `U`. To see full details about the 3DS
 * calls in those situations please use our transaction events API.
 */
export type ErrorData = ThreeDSecureError;

export const errorDataSchema: Schema<ErrorData> = s.of<ErrorData>(
  s.union([s.lazy(() => threeDSecureErrorSchema)]),
);
