import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The new expiration date for the payment method. */
export type ExpirationDate4 = string;

export const expirationDate4Schema: Schema<ExpirationDate4> = s.of<ExpirationDate4>(s.union([s.string()]));
