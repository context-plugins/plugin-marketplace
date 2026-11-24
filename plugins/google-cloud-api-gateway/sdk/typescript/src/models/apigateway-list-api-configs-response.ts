import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayApiConfigSchema, type ApigatewayApiConfig } from "./apigateway-api-config.js";

/** Response message for ApiGatewayService.ListApiConfigs */
export type ApigatewayListApiConfigsResponse = {
  /** API Configs. */
  apiConfigs?: ApigatewayApiConfig[];
  /** Next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayListApiConfigsResponseSchema: Schema<ApigatewayListApiConfigsResponse> =
  s.object<ApigatewayListApiConfigsResponse>(
    {
      apiConfigs: s.optional(s.array(s.lazy(() => apigatewayApiConfigSchema))),
      nextPageToken: s.optional(s.string()),
      unreachableLocations: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
