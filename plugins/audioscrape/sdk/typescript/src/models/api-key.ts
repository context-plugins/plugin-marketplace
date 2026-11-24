import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiKey = {
  /** RFC 3339 UTC timestamp. */
  createdAt?: string | null;
  /**
   * When the key stops authenticating (RFC 3339). `null` = never expires, which is the case for
   * every key issued before 2026-07-31.
   */
  expiresAt?: string | null;
  id: number;
  /** Human-readable label for the key (shown in the dashboard). */
  keyName: string;
  /**
   * Display-safe prefix of the key (first 12 characters + "..."). Always present. Use this to
   * identify the key in logs and UIs.
   */
  keyPrefix: string;
  /**
   * The full bearer token, format `sk_<base64(32 random bytes)>`. **Returned only in the response
   * to `POST /api/keys`** — Audioscrape stores only a SHA-256 hash, so list / delete endpoints
   * cannot recover the raw value. Save it client-side immediately on creation.
   */
  keyValue?: string | null;
  /**
   * RFC 3339 UTC timestamp of the most recent request that used this key. `null` if the key has
   * never been used.
   */
  lastUsed?: string | null;
  /**
   * Source IP of the request described by `last_used` (as seen by our edge). `null` if the key has
   * never been used or the IP was unavailable. Use it to spot a leaked key being used from
   * somewhere unexpected.
   */
  lastUsedIp?: string | null;
  /**
   * Workspace this key is scoped to. `null` means the key follows the user's `current_workspace_id`
   * at request time (legacy behavior).
   */
  workspaceId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySchema: Schema<ApiKey> = s.object<ApiKey>(
  {
    createdAt: s.optionalNullable(s.string()),
    expiresAt: s.optionalNullable(s.string()),
    id: s.int(),
    keyName: s.string(),
    keyPrefix: s.string(),
    keyValue: s.optionalNullable(s.string()),
    lastUsed: s.optionalNullable(s.string()),
    lastUsedIp: s.optionalNullable(s.string()),
    workspaceId: s.optionalNullable(s.int()),
    _keysMap: {
      createdAt: "created_at",
      expiresAt: "expires_at",
      keyName: "key_name",
      keyPrefix: "key_prefix",
      keyValue: "key_value",
      lastUsed: "last_used",
      lastUsedIp: "last_used_ip",
      workspaceId: "workspace_id",
    },
  },
  { additionalProperties: s.json() },
);
