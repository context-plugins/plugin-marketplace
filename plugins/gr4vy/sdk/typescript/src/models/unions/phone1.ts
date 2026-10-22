import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The phone number of the recipient at this address, which should be formatted according to the
 * E164 number standard.
 */
export type Phone1 = string;

export const phone1Schema: Schema<Phone1> = s.of<Phone1>(s.union([s.string()]));
