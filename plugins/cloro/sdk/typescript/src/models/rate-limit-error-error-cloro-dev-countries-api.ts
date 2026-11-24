import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error4CloroDevCountriesApiSchema,
  type Error4CloroDevCountriesApi,
} from "./error4-cloro-dev-countries-api.js";

export type RateLimitErrorErrorCloroDevCountriesApi = {
  success?: boolean;
  error?: Error4CloroDevCountriesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitErrorErrorCloroDevCountriesApiSchema: Schema<RateLimitErrorErrorCloroDevCountriesApi> =
  s.object<RateLimitErrorErrorCloroDevCountriesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error4CloroDevCountriesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
