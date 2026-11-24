import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspacePermissionsResponse = {
  /**
   * A map of OAuth resources to the permission actions granted for each. Keys are resource names
   * (e.g. `posts`, `segments`) and values are arrays of granted actions (`read` and/or `write`).
   * API keys receive all granular OAuth scopes. OAuth tokens receive only the scopes they were
   * authorized for. `posts` write access is only included when the Send API feature is enabled for
   * the workspace; if the token has `posts:write` but Send API is disabled, `posts` is returned as
   * `["read"]`.
   */
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacePermissionsResponseSchema: Schema<WorkspacePermissionsResponse> =
  s.object<WorkspacePermissionsResponse>(
    {
      data: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
