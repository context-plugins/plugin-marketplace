import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cvvResponseCodeSchema, type CvvResponseCode } from "../cvv-response-code.js";

/**
 * The response code received from the payment service for the Card Verification Value (CVV). This
 * code is mapped to a standardized Gr4vy CVV response code.
 */
export type CvvResponseCode1 = CvvResponseCode;

export const cvvResponseCode1Schema: Schema<CvvResponseCode1> = s.of<CvvResponseCode1>(
  s.union([s.lazy(() => cvvResponseCodeSchema)]),
);
