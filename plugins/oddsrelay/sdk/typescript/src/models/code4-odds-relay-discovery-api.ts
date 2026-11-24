import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code4OddsRelayDiscoveryApi = {
  TemporarilyUnavailable: "temporarily_unavailable",
  RawNotEnabled: "raw_not_enabled",
} as const;
export type Code4OddsRelayDiscoveryApi =
  | (typeof Code4OddsRelayDiscoveryApi)[keyof typeof Code4OddsRelayDiscoveryApi]
  | (string & {});

export const code4OddsRelayDiscoveryApiSchema: EnumSchema<Code4OddsRelayDiscoveryApi> =
  s.enumOf<Code4OddsRelayDiscoveryApi>(Code4OddsRelayDiscoveryApi);
