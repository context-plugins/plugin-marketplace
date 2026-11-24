import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CountryVariantQgdleu = string;

export const countryVariantQgdleuSchema: Schema<CountryVariantQgdleu> = s.of<CountryVariantQgdleu>(
  s.union([s.string()]),
);
