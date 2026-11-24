import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The non-secret view of a key. The raw token is never stored and never appears here — only in the
 * create/rotate responses.
 */
export type ApiKey = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySchema: Schema<ApiKey> = s.object<ApiKey>(
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
