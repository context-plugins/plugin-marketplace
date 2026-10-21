import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Signed and encrypted payload containing the data necessary to process the payment. Returned when
 * `payloadTypeIndicator` is PAYMENT.
 */
export type Securepayload = string;

export const securepayloadSchema: Schema<Securepayload> = s.of<Securepayload>(s.union([s.string()]));
