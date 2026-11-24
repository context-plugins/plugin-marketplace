import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1CloroDevCountriesApiSchema,
  type Error1CloroDevCountriesApi,
} from "./error1-cloro-dev-countries-api.js";

export type AuthenticationErrorErrorCloroDevCountriesApi = {
  success?: boolean;
  error?: Error1CloroDevCountriesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationErrorErrorCloroDevCountriesApiSchema: Schema<AuthenticationErrorErrorCloroDevCountriesApi> =
  s.object<AuthenticationErrorErrorCloroDevCountriesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error1CloroDevCountriesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
