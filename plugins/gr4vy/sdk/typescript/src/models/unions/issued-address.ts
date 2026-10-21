import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The address of the place/agency that issued the ticket. */
export type IssuedAddress = string;

export const issuedAddressSchema: Schema<IssuedAddress> = s.of<IssuedAddress>(s.union([s.string()]));
