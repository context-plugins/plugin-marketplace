import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesLocations404Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesLocations404ErrorSchema: Schema<ApiV2NumbersCountriesLocations404Error> =
  s.object<ApiV2NumbersCountriesLocations404Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
