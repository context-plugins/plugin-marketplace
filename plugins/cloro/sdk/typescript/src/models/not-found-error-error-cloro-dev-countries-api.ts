import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error3CloroDevCountriesApiSchema,
  type Error3CloroDevCountriesApi,
} from "./error3-cloro-dev-countries-api.js";

export type NotFoundErrorErrorCloroDevCountriesApi = {
  success?: boolean;
  error?: Error3CloroDevCountriesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundErrorErrorCloroDevCountriesApiSchema: Schema<NotFoundErrorErrorCloroDevCountriesApi> =
  s.object<NotFoundErrorErrorCloroDevCountriesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error3CloroDevCountriesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
