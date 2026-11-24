import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesCities404Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesCities404ErrorSchema: Schema<ApiV2NumbersCountriesCities404Error> =
  s.object<ApiV2NumbersCountriesCities404Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
