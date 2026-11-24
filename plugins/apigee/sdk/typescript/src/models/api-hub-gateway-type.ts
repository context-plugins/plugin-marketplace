import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. */
export const ApiHubGatewayType = {
  ApiHubGatewayTypeUnspecified: "API_HUB_GATEWAY_TYPE_UNSPECIFIED",
  ApigeeX: "APIGEE_X",
  ApigeeHybrid: "APIGEE_HYBRID",
  ApigeeEdge: "APIGEE_EDGE",
  ApigeeOpdk: "APIGEE_OPDK",
} as const;
export type ApiHubGatewayType = (typeof ApiHubGatewayType)[keyof typeof ApiHubGatewayType] | (string & {});

export const apiHubGatewayTypeSchema: EnumSchema<ApiHubGatewayType> =
  s.enumOf<ApiHubGatewayType>(ApiHubGatewayType);
