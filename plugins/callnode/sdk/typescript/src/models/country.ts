import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Country = {
  /** Opaque token. Pass back verbatim; do not persist. */
  countryId?: string;
  countryName?: string;
  isUs?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countrySchema: Schema<Country> = s.object<Country>(
  {
    countryId: s.optional(s.string()),
    countryName: s.optional(s.string()),
    isUs: s.optional(s.boolean()),
    _keysMap: {
      isUs: "isUS",
    },
  },
  { additionalProperties: s.json() },
);
