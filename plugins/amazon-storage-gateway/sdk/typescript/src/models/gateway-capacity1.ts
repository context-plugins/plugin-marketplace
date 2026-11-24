import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and
 * hardware recommendations. For more information, see Performance guidance for gateways with
 * multiple file shares in the Amazon S3 File Gateway User Guide.
 */
export const GatewayCapacity1 = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
} as const;
export type GatewayCapacity1 = (typeof GatewayCapacity1)[keyof typeof GatewayCapacity1] | (string & {});

export const gatewayCapacity1Schema: EnumSchema<GatewayCapacity1> =
  s.enumOf<GatewayCapacity1>(GatewayCapacity1);
