import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** One tool the caller must authorize before the agent can run. */
export type PlatformAuthenticationSuggestion = {
  /** Human-readable tool name. */
  toolName?: string;
  /**
   * Identifier to POST to `/tool-servers/{serverId}/auth` (Client API) with `returnUrl` in the
   * request body to obtain an `authorizationUrl` to redirect the end user to.
   */
  serverId: string;
};

export const platformAuthenticationSuggestionSchema: Schema<PlatformAuthenticationSuggestion> =
  s.object<PlatformAuthenticationSuggestion>({
    toolName: s.optional(s.string()),
    serverId: s.string(),
    _keysMap: {
      toolName: "tool_name",
      serverId: "server_id",
    },
  });
