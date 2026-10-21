import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When the `response_code` is set to `updated`, the payment method's account number will be updated
 * to this value.
 */
export type AccountNumber5 = string;

export const accountNumber5Schema: Schema<AccountNumber5> = s.of<AccountNumber5>(s.union([s.string()]));
