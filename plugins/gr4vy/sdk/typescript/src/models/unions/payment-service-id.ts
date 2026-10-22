import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The unique identifier of an existing payment service. When provided, the created transaction will
 * be processed by the given payment service and any routing rules will be skipped.
 */
export type PaymentServiceId = string;

export const paymentServiceIdSchema: Schema<PaymentServiceId> = s.of<PaymentServiceId>(s.union([s.string()]));
