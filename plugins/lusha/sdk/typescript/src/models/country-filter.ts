import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryFilter = {
  name: string;
  code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryFilterSchema: Schema<CountryFilter> = s.object<CountryFilter>(
  {
    name: s.string(),
    code: s.string(),
  },
  { additionalProperties: s.json() },
);
