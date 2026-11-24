import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SitesSettingsBlockedIpsResponse = {
  /**
   * Blocked client IPs, as strings. Note the asymmetry with PUT, which takes the bare array as its
   * request body.
   */
  blockedIps: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitesSettingsBlockedIpsResponseSchema: Schema<SitesSettingsBlockedIpsResponse> =
  s.object<SitesSettingsBlockedIpsResponse>(
    {
      blockedIps: s.array(s.string()),
      _keysMap: {
        blockedIps: "blocked_ips",
      },
    },
    { additionalProperties: s.json() },
  );
