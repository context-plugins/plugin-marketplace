import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The expiration date for the payment method. */
export type ExpirationDate2 = string;

export const expirationDate2Schema: Schema<ExpirationDate2> = s.of<ExpirationDate2>(s.union([s.string()]));
