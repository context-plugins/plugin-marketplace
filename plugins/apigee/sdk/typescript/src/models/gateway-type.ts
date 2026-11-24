import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GatewayType = {
  ApiHubGatewayTypeUnspecified: "API_HUB_GATEWAY_TYPE_UNSPECIFIED",
  ApigeeX: "APIGEE_X",
  ApigeeHybrid: "APIGEE_HYBRID",
  ApigeeEdge: "APIGEE_EDGE",
  ApigeeOpdk: "APIGEE_OPDK",
} as const;
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType] | (string & {});

export const gatewayTypeSchema: EnumSchema<GatewayType> = s.enumOf<GatewayType>(GatewayType);
