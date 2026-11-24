import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code2OddsRelayDiscoveryApi = {
  MissingApiKey: "missing_api_key",
  InvalidApiKey: "invalid_api_key",
  RevokedApiKey: "revoked_api_key",
  ExpiredApiKey: "expired_api_key",
  PausedApiKey: "paused_api_key",
} as const;
export type Code2OddsRelayDiscoveryApi =
  | (typeof Code2OddsRelayDiscoveryApi)[keyof typeof Code2OddsRelayDiscoveryApi]
  | (string & {});

export const code2OddsRelayDiscoveryApiSchema: EnumSchema<Code2OddsRelayDiscoveryApi> =
  s.enumOf<Code2OddsRelayDiscoveryApi>(Code2OddsRelayDiscoveryApi);
