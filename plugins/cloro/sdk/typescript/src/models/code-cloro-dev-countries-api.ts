import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CodeCloroDevCountriesApi = {
  MissingApiKey: "MISSING_API_KEY",
  InvalidApiKeyFormat: "INVALID_API_KEY_FORMAT",
  InvalidOrExpiredApiKey: "INVALID_OR_EXPIRED_API_KEY",
} as const;
export type CodeCloroDevCountriesApi =
  | (typeof CodeCloroDevCountriesApi)[keyof typeof CodeCloroDevCountriesApi]
  | (string & {});

export const codeCloroDevCountriesApiSchema: EnumSchema<CodeCloroDevCountriesApi> =
  s.enumOf<CodeCloroDevCountriesApi>(CodeCloroDevCountriesApi);
