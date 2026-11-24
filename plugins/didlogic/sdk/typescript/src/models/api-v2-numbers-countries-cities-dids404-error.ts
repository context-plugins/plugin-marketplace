import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesCitiesDids404Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesCitiesDids404ErrorSchema: Schema<ApiV2NumbersCountriesCitiesDids404Error> =
  s.object<ApiV2NumbersCountriesCitiesDids404Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
