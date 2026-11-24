import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The created (or rotated) key plus its raw token. The token is returned exactly once and cannot be
 * retrieved later.
 */
export type CreatedApiKey = {
  id: number;
  name: string;
  /** Non-secret fragment of the token, to identify the key in a list. */
  prefix: string;
  /** The site the key is locked to; null = all of the owner's sites. */
  websiteId: number | null;
  /** Comma-separated scope set, in catalog order. */
  scopes: string;
  createdAt: Date;
  createdIp?: string | null;
  lastUsedAt?: Date | null;
  lastUsedIp?: string | null;
  /**
   * null = never expires. Only dashboard-created keys can be non-expiring; keys created over the
   * API always carry an expiry.
   */
  expiresAt?: Date | null;
  /** The raw bearer token. Store it now. */
  token: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createdApiKeySchema: Schema<CreatedApiKey> = s.object<CreatedApiKey>(
  {
    id: s.int(),
    name: s.string(),
    prefix: s.string(),
    websiteId: s.nullable(s.int()),
    scopes: s.string(),
    createdAt: s.dateTime(),
    createdIp: s.optionalNullable(s.string()),
    lastUsedAt: s.optionalNullable(s.dateTime()),
    lastUsedIp: s.optionalNullable(s.string()),
    expiresAt: s.optionalNullable(s.dateTime()),
    token: s.string(),
    _keysMap: {
      websiteId: "website_id",
      createdAt: "created_at",
      createdIp: "created_ip",
      lastUsedAt: "last_used_at",
      lastUsedIp: "last_used_ip",
      expiresAt: "expires_at",
    },
  },
  { additionalProperties: s.json() },
);
