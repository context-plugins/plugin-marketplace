import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { avsResponseCodeSchema, type AvsResponseCode } from "../avs-response-code.js";

/**
 * The response code received from the payment service for the Address Verification Check (AVS).
 * This code is mapped to a standardized Gr4vy AVS response code.
 */
export type AvsResponseCode1 = AvsResponseCode;

export const avsResponseCode1Schema: Schema<AvsResponseCode1> = s.of<AvsResponseCode1>(
  s.union([s.lazy(() => avsResponseCodeSchema)]),
);
