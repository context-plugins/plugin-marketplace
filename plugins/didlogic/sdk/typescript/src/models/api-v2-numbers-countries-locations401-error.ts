import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesLocations401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesLocations401ErrorSchema: Schema<ApiV2NumbersCountriesLocations401Error> =
  s.object<ApiV2NumbersCountriesLocations401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
