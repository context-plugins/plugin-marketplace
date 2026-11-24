import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorBundleSocialMiscApiSchema,
  type ErrorBundleSocialMiscApi,
} from "./error-bundle-social-misc-api.js";
import { granularScopeSchema, type GranularScope } from "./granular-scope.js";
import {
  typeBundleSocialMiscApiSchema,
  type TypeBundleSocialMiscApi,
} from "./type-bundle-social-misc-api.js";

export type ApiV1MiscFacebookTokenDebugResponse = {
  type?: TypeBundleSocialMiscApi;
  application?: string;
  dataAccessExpiresAt?: number;
  isValid: boolean;
  issuedAt?: number;
  scopes: string[];
  granularScopes: GranularScope[];
  error?: ErrorBundleSocialMiscApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookTokenDebugResponseSchema: Schema<ApiV1MiscFacebookTokenDebugResponse> =
  s.object<ApiV1MiscFacebookTokenDebugResponse>(
    {
      type: s.optional(s.lazy(() => typeBundleSocialMiscApiSchema)),
      application: s.optional(s.string()),
      dataAccessExpiresAt: s.optional(s.float64()),
      isValid: s.boolean(),
      issuedAt: s.optional(s.float64()),
      scopes: s.array(s.string()),
      granularScopes: s.array(s.lazy(() => granularScopeSchema)),
      error: s.optional(s.lazy(() => errorBundleSocialMiscApiSchema)),
      _keysMap: {
        dataAccessExpiresAt: "data_access_expires_at",
        isValid: "is_valid",
        issuedAt: "issued_at",
        granularScopes: "granular_scopes",
      },
    },
    { additionalProperties: s.json() },
  );
