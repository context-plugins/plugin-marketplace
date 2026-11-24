import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersCountriesRegions403Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesRegions403ErrorSchema: Schema<ApiV2NumbersCountriesRegions403Error> =
  s.object<ApiV2NumbersCountriesRegions403Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
