import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code3OddsRelayServiceApi = {
  BadRequest: "bad_request",
  MissingParam: "missing_param",
  RegionRequired: "region_required",
  UnknownSport: "unknown_sport",
  UnknownMarket: "unknown_market",
  UnknownBookmaker: "unknown_bookmaker",
  UnknownExchange: "unknown_exchange",
} as const;
export type Code3OddsRelayServiceApi =
  | (typeof Code3OddsRelayServiceApi)[keyof typeof Code3OddsRelayServiceApi]
  | (string & {});

export const code3OddsRelayServiceApiSchema: EnumSchema<Code3OddsRelayServiceApi> =
  s.enumOf<Code3OddsRelayServiceApi>(Code3OddsRelayServiceApi);
