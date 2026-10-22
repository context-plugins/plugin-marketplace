import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When the `response_code` is set to `updated`, the payment method's expiration month will be
 * updated to this value.
 */
export type ExpirationMonth = string;

export const expirationMonthSchema: Schema<ExpirationMonth> = s.of<ExpirationMonth>(s.union([s.string()]));
