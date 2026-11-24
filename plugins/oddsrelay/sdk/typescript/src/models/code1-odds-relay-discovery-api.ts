import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code1OddsRelayDiscoveryApi = {
  AccountSuspended: "account_suspended",
  NotInKeyScope: "not_in_key_scope",
  ProductNotInRegion: "product_not_in_region",
  OriginNotAllowed: "origin_not_allowed",
  RegionNotInScope: "region_not_in_scope",
  BookmakerNotInRegion: "bookmaker_not_in_region",
  BookmakerNotInPlan: "bookmaker_not_in_plan",
  SportNotInPlan: "sport_not_in_plan",
  MarketNotInPlan: "market_not_in_plan",
  ExchangeNotInPlan: "exchange_not_in_plan",
  SchemaNotInScope: "schema_not_in_scope",
} as const;
export type Code1OddsRelayDiscoveryApi =
  | (typeof Code1OddsRelayDiscoveryApi)[keyof typeof Code1OddsRelayDiscoveryApi]
  | (string & {});

export const code1OddsRelayDiscoveryApiSchema: EnumSchema<Code1OddsRelayDiscoveryApi> =
  s.enumOf<Code1OddsRelayDiscoveryApi>(Code1OddsRelayDiscoveryApi);
