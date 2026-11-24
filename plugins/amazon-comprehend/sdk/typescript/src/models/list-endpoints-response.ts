import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endpointPropertiesSchema, type EndpointProperties } from "./endpoint-properties.js";

export type ListEndpointsResponse = {
  /**
   * Displays a list of endpoint properties being retrieved by the service in response to the
   * request.
   */
  endpointPropertiesList?: EndpointProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEndpointsResponseSchema: Schema<ListEndpointsResponse> = s.object<ListEndpointsResponse>(
  {
    endpointPropertiesList: s.optional(s.array(s.lazy(() => endpointPropertiesSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      endpointPropertiesList: "EndpointPropertiesList",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
