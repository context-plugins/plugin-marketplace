import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error4CloroDevCountriesApi = {
  code?: string;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error4CloroDevCountriesApiSchema: Schema<Error4CloroDevCountriesApi> =
  s.object<Error4CloroDevCountriesApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
