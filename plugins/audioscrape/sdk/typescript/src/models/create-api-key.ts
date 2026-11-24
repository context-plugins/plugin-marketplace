import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateApiKey = {
  /**
   * Optional: when this key stops working (RFC 3339). Omit for a key that never expires — the
   * behaviour of every key issued before 2026-07-31.
   */
  expiresAt?: Date | null;
  /**
   * Human-readable label for the key. Stored verbatim; visible in the dashboard and in `last_used`
   * audit logs. Recommended: identify the integration + environment, e.g.
   * `"acme-dev-connector-v1"`.
   */
  keyName: string;
  /**
   * Optional: scope this key to a single workspace. If omitted, the key uses the user's
   * current_workspace_id at each request (legacy behavior). To scope to a workspace, the caller
   * must be a member of it.
   */
  workspaceId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createApiKeySchema: Schema<CreateApiKey> = s.object<CreateApiKey>(
  {
    expiresAt: s.optionalNullable(s.dateTime()),
    keyName: s.string(),
    workspaceId: s.optionalNullable(s.int()),
    _keysMap: {
      expiresAt: "expires_at",
      keyName: "key_name",
      workspaceId: "workspace_id",
    },
  },
  { additionalProperties: s.json() },
);
