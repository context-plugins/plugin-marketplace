import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureDataV1Schema, type ThreeDSecureDataV1 } from "../three-dsecure-data-v1.js";
import { threeDSecureV2Schema, type ThreeDSecureV2 } from "../three-dsecure-v2.js";

/**
 * The 3DS data used for this transaction. To see full details about the 3DS calls please use our
 * transaction events API.
 */
export type ResponseData = ThreeDSecureDataV1 | ThreeDSecureV2;

export const responseDataSchema: Schema<ResponseData> = s.of<ResponseData>(
  s.union([s.lazy(() => threeDSecureDataV1Schema), s.lazy(() => threeDSecureV2Schema)]),
);
