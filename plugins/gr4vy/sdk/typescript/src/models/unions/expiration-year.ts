import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When the `response_code` is set to `updated`, the payment method's expiration year will be
 * updated to this value.
 */
export type ExpirationYear = string;

export const expirationYearSchema: Schema<ExpirationYear> = s.of<ExpirationYear>(s.union([s.string()]));
