import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureSchema, type ThreeDSecure } from "../three-dsecure.js";

/** Optional 3-D Secure values to use during the authentication flow. */
export type ThreeDSecure11 = ThreeDSecure;

export const threeDSecure11Schema: Schema<ThreeDSecure11> = s.of<ThreeDSecure11>(
  s.union([s.lazy(() => threeDSecureSchema)]),
);
