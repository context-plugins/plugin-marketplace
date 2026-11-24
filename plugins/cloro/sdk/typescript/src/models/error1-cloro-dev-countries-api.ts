import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  codeCloroDevCountriesApiSchema,
  type CodeCloroDevCountriesApi,
} from "./code-cloro-dev-countries-api.js";

export type Error1CloroDevCountriesApi = {
  code?: CodeCloroDevCountriesApi;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1CloroDevCountriesApiSchema: Schema<Error1CloroDevCountriesApi> =
  s.object<Error1CloroDevCountriesApi>(
    {
      code: s.optional(s.lazy(() => codeCloroDevCountriesApiSchema)),
      message: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
