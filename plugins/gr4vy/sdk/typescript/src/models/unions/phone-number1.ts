import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The phone number for the buyer which should be formatted according to the E164 number standard.
 */
export type PhoneNumber1 = string;

export const phoneNumber1Schema: Schema<PhoneNumber1> = s.of<PhoneNumber1>(s.union([s.string()]));
