import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.
 */
export type SecurityCode = string;

export const securityCodeSchema: Schema<SecurityCode> = s.of<SecurityCode>(s.union([s.string()]));
