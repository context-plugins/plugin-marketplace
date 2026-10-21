import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment service's unique ID for the capture. */
export type PaymentServiceCaptureId = string;

export const paymentServiceCaptureIdSchema: Schema<PaymentServiceCaptureId> = s.of<PaymentServiceCaptureId>(
  s.union([s.string()]),
);
