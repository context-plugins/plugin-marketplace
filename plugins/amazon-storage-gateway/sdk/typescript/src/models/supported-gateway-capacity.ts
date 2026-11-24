import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedGatewayCapacity = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
} as const;
export type SupportedGatewayCapacity =
  | (typeof SupportedGatewayCapacity)[keyof typeof SupportedGatewayCapacity]
  | (string & {});

export const supportedGatewayCapacitySchema: EnumSchema<SupportedGatewayCapacity> =
  s.enumOf<SupportedGatewayCapacity>(SupportedGatewayCapacity);
