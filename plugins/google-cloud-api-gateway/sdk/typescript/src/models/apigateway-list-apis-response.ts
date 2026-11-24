import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayApiSchema, type ApigatewayApi } from "./apigateway-api.js";

/** Response message for ApiGatewayService.ListApis */
export type ApigatewayListApisResponse = {
  /** APIs. */
  apis?: ApigatewayApi[];
  /** Locations that could not be reached. */
  unreachableLocations?: string[];
  /** Next page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayListApisResponseSchema: Schema<ApigatewayListApisResponse> =
  s.object<ApigatewayListApisResponse>(
    {
      apis: s.optional(s.array(s.lazy(() => apigatewayApiSchema))),
      unreachableLocations: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
