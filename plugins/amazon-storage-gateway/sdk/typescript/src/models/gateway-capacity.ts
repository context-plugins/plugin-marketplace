import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the size of the gateway's metadata cache. */
export const GatewayCapacity = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
} as const;
export type GatewayCapacity = (typeof GatewayCapacity)[keyof typeof GatewayCapacity] | (string & {});

export const gatewayCapacitySchema: EnumSchema<GatewayCapacity> = s.enumOf<GatewayCapacity>(GatewayCapacity);
