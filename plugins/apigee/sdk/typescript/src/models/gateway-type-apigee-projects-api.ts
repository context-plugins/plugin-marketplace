import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of the gateway. */
export const GatewayTypeApigeeProjectsApi = {
  GatewayTypeUnspecified: "GATEWAY_TYPE_UNSPECIFIED",
  ApigeeXAndHybrid: "APIGEE_X_AND_HYBRID",
  ApigeeEdgePublicCloud: "APIGEE_EDGE_PUBLIC_CLOUD",
  ApigeeEdgePrivateCloud: "APIGEE_EDGE_PRIVATE_CLOUD",
  CloudApiGateway: "CLOUD_API_GATEWAY",
  CloudEndpoints: "CLOUD_ENDPOINTS",
  ApiDiscovery: "API_DISCOVERY",
  Others: "OTHERS",
  AwsApiGateway: "AWS_API_GATEWAY",
  AzureApiManagement: "AZURE_API_MANAGEMENT",
} as const;
export type GatewayTypeApigeeProjectsApi =
  | (typeof GatewayTypeApigeeProjectsApi)[keyof typeof GatewayTypeApigeeProjectsApi]
  | (string & {});

export const gatewayTypeApigeeProjectsApiSchema: EnumSchema<GatewayTypeApigeeProjectsApi> =
  s.enumOf<GatewayTypeApigeeProjectsApi>(GatewayTypeApigeeProjectsApi);
