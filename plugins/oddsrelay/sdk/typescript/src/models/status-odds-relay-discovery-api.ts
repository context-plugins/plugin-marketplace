import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusOddsRelayDiscoveryApi = {
  Upcoming: "upcoming",
  Started: "started",
} as const;
export type StatusOddsRelayDiscoveryApi =
  | (typeof StatusOddsRelayDiscoveryApi)[keyof typeof StatusOddsRelayDiscoveryApi]
  | (string & {});

export const statusOddsRelayDiscoveryApiSchema: EnumSchema<StatusOddsRelayDiscoveryApi> =
  s.enumOf<StatusOddsRelayDiscoveryApi>(StatusOddsRelayDiscoveryApi);
