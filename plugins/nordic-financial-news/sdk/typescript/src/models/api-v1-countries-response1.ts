import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySummarySchema, type CountrySummary } from "./country-summary.js";

export type ApiV1CountriesResponse1 = {
  country: CountrySummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CountriesResponse1Schema: Schema<ApiV1CountriesResponse1> =
  s.object<ApiV1CountriesResponse1>(
    {
      country: countrySummarySchema,
    },
    { additionalProperties: s.json() },
  );
