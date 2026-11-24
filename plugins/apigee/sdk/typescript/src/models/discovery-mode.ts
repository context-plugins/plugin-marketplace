import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Discovery mode of the dependency. */
export const DiscoveryMode = {
  DiscoveryModeUnspecified: "DISCOVERY_MODE_UNSPECIFIED",
  Manual: "MANUAL",
} as const;
export type DiscoveryMode = (typeof DiscoveryMode)[keyof typeof DiscoveryMode] | (string & {});

export const discoveryModeSchema: EnumSchema<DiscoveryMode> = s.enumOf<DiscoveryMode>(DiscoveryMode);
