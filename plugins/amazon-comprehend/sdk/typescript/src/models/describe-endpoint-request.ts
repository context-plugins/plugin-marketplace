import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeEndpointRequest = {
  /** The Amazon Resource Number (ARN) of the endpoint being described. */
  endpointArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEndpointRequestSchema: Schema<DescribeEndpointRequest> =
  s.object<DescribeEndpointRequest>(
    {
      endpointArn: s.string(),
      _keysMap: {
        endpointArn: "EndpointArn",
      },
    },
    { additionalProperties: s.json() },
  );
