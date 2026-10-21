import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The phone number of the passenger. This number is formatted according to the E164 number
 * standard.
 */
export type PhoneNumber = string;

export const phoneNumberSchema: Schema<PhoneNumber> = s.of<PhoneNumber>(s.union([s.string()]));
