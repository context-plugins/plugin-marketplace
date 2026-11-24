import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detailsCloroDevCountriesApiSchema,
  type DetailsCloroDevCountriesApi,
} from "./details-cloro-dev-countries-api.js";

export type Error3CloroDevCountriesApi = {
  code?: string;
  message?: string;
  details?: DetailsCloroDevCountriesApi;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error3CloroDevCountriesApiSchema: Schema<Error3CloroDevCountriesApi> =
  s.object<Error3CloroDevCountriesApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      details: s.optional(s.lazy(() => detailsCloroDevCountriesApiSchema)),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
