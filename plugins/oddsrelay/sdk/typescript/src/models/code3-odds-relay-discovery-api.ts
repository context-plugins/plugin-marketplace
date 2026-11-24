import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code3OddsRelayDiscoveryApi = {
  NotFound: "not_found",
  UnknownType: "unknown_type",
  UnknownRegion: "unknown_region",
  UnknownEvent: "unknown_event",
} as const;
export type Code3OddsRelayDiscoveryApi =
  | (typeof Code3OddsRelayDiscoveryApi)[keyof typeof Code3OddsRelayDiscoveryApi]
  | (string & {});

export const code3OddsRelayDiscoveryApiSchema: EnumSchema<Code3OddsRelayDiscoveryApi> =
  s.enumOf<Code3OddsRelayDiscoveryApi>(Code3OddsRelayDiscoveryApi);
