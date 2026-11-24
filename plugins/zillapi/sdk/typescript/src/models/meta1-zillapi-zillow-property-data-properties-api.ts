import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta1ZillapiZillowPropertyDataPropertiesApi = {
  tourEligibility?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta1ZillapiZillowPropertyDataPropertiesApiSchema: Schema<Meta1ZillapiZillowPropertyDataPropertiesApi> =
  s.object<Meta1ZillapiZillowPropertyDataPropertiesApi>(
    {
      tourEligibility: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        tourEligibility: "tour_eligibility",
      },
    },
    { additionalProperties: s.json() },
  );
