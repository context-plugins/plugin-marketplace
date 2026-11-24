import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endpointPropertiesSchema, type EndpointProperties } from "./endpoint-properties.js";

export type DescribeEndpointResponse = {
  endpointProperties?: EndpointProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEndpointResponseSchema: Schema<DescribeEndpointResponse> =
  s.object<DescribeEndpointResponse>(
    {
      endpointProperties: s.optional(s.lazy(() => endpointPropertiesSchema)),
      _keysMap: {
        endpointProperties: "EndpointProperties",
      },
    },
    { additionalProperties: s.json() },
  );
