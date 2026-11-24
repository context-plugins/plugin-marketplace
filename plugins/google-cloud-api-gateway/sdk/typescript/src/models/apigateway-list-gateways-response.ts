import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayGatewaySchema, type ApigatewayGateway } from "./apigateway-gateway.js";

/** Response message for ApiGatewayService.ListGateways */
export type ApigatewayListGatewaysResponse = {
  /** Locations that could not be reached. */
  unreachableLocations?: string[];
  /** Next page token. */
  nextPageToken?: string;
  /** Gateways. */
  gateways?: ApigatewayGateway[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayListGatewaysResponseSchema: Schema<ApigatewayListGatewaysResponse> =
  s.object<ApigatewayListGatewaysResponse>(
    {
      unreachableLocations: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
      gateways: s.optional(s.array(s.lazy(() => apigatewayGatewaySchema))),
    },
    { additionalProperties: s.json() },
  );
