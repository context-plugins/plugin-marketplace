import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The postal code or zip code for the address. */
export type PostalCode = string;

export const postalCodeSchema: Schema<PostalCode> = s.of<PostalCode>(s.union([s.string()]));
