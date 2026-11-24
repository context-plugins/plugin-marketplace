import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error2CloroDevCountriesApiSchema,
  type Error2CloroDevCountriesApi,
} from "./error2-cloro-dev-countries-api.js";

export type InternalErrorErrorCloroDevCountriesApi = {
  success?: boolean;
  error?: Error2CloroDevCountriesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalErrorErrorCloroDevCountriesApiSchema: Schema<InternalErrorErrorCloroDevCountriesApi> =
  s.object<InternalErrorErrorCloroDevCountriesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error2CloroDevCountriesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
