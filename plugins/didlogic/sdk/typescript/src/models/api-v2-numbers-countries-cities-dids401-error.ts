import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesCitiesDids401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesCitiesDids401ErrorSchema: Schema<ApiV2NumbersCountriesCitiesDids401Error> =
  s.object<ApiV2NumbersCountriesCitiesDids401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
