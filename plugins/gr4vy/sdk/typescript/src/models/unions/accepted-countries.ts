import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A list of countries for which this service is enabled, in ISO two-letter code format. */
export type AcceptedCountries = string[];

export const acceptedCountriesSchema: Schema<AcceptedCountries> = s.of<AcceptedCountries>(
  s.union([s.array(s.string())]),
);
