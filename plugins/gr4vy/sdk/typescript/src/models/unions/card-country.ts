import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country of the card issuer. */
export type CardCountry = string;

export const cardCountrySchema: Schema<CardCountry> = s.of<CardCountry>(s.union([s.string()]));
