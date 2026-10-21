import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Target discovery mechanism. Use static to manually enter a list of targets. */
export const DiscoveryType = {
  Static: "static",
  Dns: "dns",
  Ec2: "ec2",
  HttpSd: "http_sd",
} as const;
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType] | (string & {});

export const discoveryTypeSchema: EnumSchema<DiscoveryType> = s.enumOf<DiscoveryType>(DiscoveryType);
