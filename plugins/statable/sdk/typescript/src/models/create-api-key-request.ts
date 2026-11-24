import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type CreateApiKeyRequest = {
  name: string;
  /**
   * Defaults to ["read"]. Must be a subset of the authenticating key's scopes, else 403
   * scope_escalation.
   */
  scopes?: Scope[];
  /**
   * Lock the new key to one site. Omit/null = all of the owner's sites. A single-site key MUST pass
   * its own site id here.
   */
  websiteId?: number | null;
  /** Outside 1–365 → 400 invalid_expiry. @default 90 */
  expiresInDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createApiKeyRequestProperties: s.Shape<CreateApiKeyRequest> = {
  name: s.string(),
  scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
  websiteId: s.optionalNullable(s.int()),
  expiresInDays: s.defaulted(s.int(), 90),
  _keysMap: {
    websiteId: "website_id",
    expiresInDays: "expires_in_days",
  },
};

export const createApiKeyRequestInternalSchema: Schema<CreateApiKeyRequest> = s.object<CreateApiKeyRequest>(
  createApiKeyRequestProperties,
  { additionalProperties: s.json() },
);

export const createApiKeyRequestSchema: Schema<CreateApiKeyRequest> = s.lazySchema(() =>
  s.object<CreateApiKeyRequest>(
    {
      ...createApiKeyRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      expiresInDays: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 90),
    },
    { additionalProperties: s.json() },
  ),
);
