import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Institution tier identifier 1 TierOne TierOne tier identifier for tier1 institution 2 TierTwo
 * TierTwo tier identifier for tier2 institution 3 TierThree TierThree tier identifier for tier3
 * institution 4 TierFour TierFour tier identifier for tier4 institution
 */
export const TierPlatformConnectorsApi = {
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
} as const;
export type TierPlatformConnectorsApi =
  | (typeof TierPlatformConnectorsApi)[keyof typeof TierPlatformConnectorsApi]
  | (string & {});

export const tierPlatformConnectorsApiSchema: EnumSchema<TierPlatformConnectorsApi> =
  s.enumOf<TierPlatformConnectorsApi>(TierPlatformConnectorsApi);
