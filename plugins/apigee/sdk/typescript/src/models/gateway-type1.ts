import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The gateway type for the API Hub deployment. */
export const GatewayType1 = {
  ApiHubGatewayTypeUnspecified: "API_HUB_GATEWAY_TYPE_UNSPECIFIED",
  ApigeeX: "APIGEE_X",
  ApigeeHybrid: "APIGEE_HYBRID",
  ApigeeEdge: "APIGEE_EDGE",
  ApigeeOpdk: "APIGEE_OPDK",
} as const;
export type GatewayType1 = (typeof GatewayType1)[keyof typeof GatewayType1] | (string & {});

export const gatewayType1Schema: EnumSchema<GatewayType1> = s.enumOf<GatewayType1>(GatewayType1);
