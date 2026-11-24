import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayLocationSchema, type ApigatewayLocation } from "./apigateway-location.js";

/** The response message for Locations.ListLocations. */
export type ApigatewayListLocationsResponse = {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ApigatewayLocation[];
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayListLocationsResponseSchema: Schema<ApigatewayListLocationsResponse> =
  s.object<ApigatewayListLocationsResponse>(
    {
      locations: s.optional(s.array(s.lazy(() => apigatewayLocationSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
