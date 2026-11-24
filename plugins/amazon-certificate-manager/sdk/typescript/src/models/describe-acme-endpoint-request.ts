import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAcmeEndpointRequest = {
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeEndpointRequestSchema: Schema<DescribeAcmeEndpointRequest> =
  s.object<DescribeAcmeEndpointRequest>(
    {
      acmeEndpointArn: s.string(),
      _keysMap: {
        acmeEndpointArn: "AcmeEndpointArn",
      },
    },
    { additionalProperties: s.json() },
  );
