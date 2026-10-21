import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The value in the phone number field of a customer's statement which should be formatted according
 * to the E164 number standard.
 */
export type PhoneNumber3 = string;

export const phoneNumber3Schema: Schema<PhoneNumber3> = s.of<PhoneNumber3>(s.union([s.string()]));
