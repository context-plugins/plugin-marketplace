import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** This is the ISO8583 response code code received from the payment service. */
export type IsoResponseCode1 = string;

export const isoResponseCode1Schema: Schema<IsoResponseCode1> = s.of<IsoResponseCode1>(s.union([s.string()]));
