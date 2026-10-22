import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureDataV1Schema, type ThreeDSecureDataV1 } from "../three-dsecure-data-v1.js";
import { threeDSecureDataV2Schema, type ThreeDSecureDataV2 } from "../three-dsecure-data-v2.js";

/**
 * Pass through 3-D Secure data to support external 3-D Secure authorisation. If using an external
 * 3-D Secure provider, you should not pass a `redirect_url` in the `payment_method` object for a
 * transaction.
 */
export type ThreeDSecureData = ThreeDSecureDataV1 | ThreeDSecureDataV2;

export const threeDSecureDataSchema: Schema<ThreeDSecureData> = s.of<ThreeDSecureData>(
  s.union([s.lazy(() => threeDSecureDataV1Schema), s.lazy(() => threeDSecureDataV2Schema)]),
);
