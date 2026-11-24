import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipCountry = string;

export const recipCountrySchema: Schema<RecipCountry> = s.of<RecipCountry>(s.union([s.string()]));
