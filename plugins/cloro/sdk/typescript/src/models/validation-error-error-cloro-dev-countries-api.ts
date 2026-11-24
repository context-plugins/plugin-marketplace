import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorCloroDevCountriesApiSchema,
  type ErrorCloroDevCountriesApi,
} from "./error-cloro-dev-countries-api.js";

export type ValidationErrorErrorCloroDevCountriesApi = {
  success?: boolean;
  error?: ErrorCloroDevCountriesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationErrorErrorCloroDevCountriesApiSchema: Schema<ValidationErrorErrorCloroDevCountriesApi> =
  s.object<ValidationErrorErrorCloroDevCountriesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => errorCloroDevCountriesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
