import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchSchema, type Search } from "./search.js";
import { supportedFieldsSchema, type SupportedFields } from "./supported-fields.js";

export type ApiV1MetaResponse = {
  version: string;
  capabilities: string[];
  supportedFields: SupportedFields;
  search?: Search;
  contentTypes: string[];
  sectors?: string[];
  rateLimitPolicy?: string;
  supportedCountries?: string[];
  supportedScopes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MetaResponseSchema: Schema<ApiV1MetaResponse> = s.object<ApiV1MetaResponse>(
  {
    version: s.string(),
    capabilities: s.array(s.string()),
    supportedFields: supportedFieldsSchema,
    search: s.optional(s.lazy(() => searchSchema)),
    contentTypes: s.array(s.string()),
    sectors: s.optional(s.array(s.string())),
    rateLimitPolicy: s.optional(s.string()),
    supportedCountries: s.optional(s.array(s.string())),
    supportedScopes: s.optional(s.array(s.string())),
    _keysMap: {
      supportedFields: "supported_fields",
      contentTypes: "content_types",
      rateLimitPolicy: "rate_limit_policy",
      supportedCountries: "supported_countries",
      supportedScopes: "supported_scopes",
    },
  },
  { additionalProperties: s.json() },
);
