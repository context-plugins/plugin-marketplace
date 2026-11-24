import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Primary = {
  number?: string;
  countryCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const primarySchema: Schema<Primary> = s.object<Primary>(
  {
    number: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    _keysMap: {
      countryCode: "country_code",
    },
  },
  { additionalProperties: s.json() },
);
