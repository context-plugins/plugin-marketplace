import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAcmeAccountRequest = {
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn: string;
  /** The URL of the ACME account. */
  accountUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeAccountRequestSchema: Schema<DescribeAcmeAccountRequest> =
  s.object<DescribeAcmeAccountRequest>(
    {
      acmeEndpointArn: s.string(),
      accountUrl: s.string(),
      _keysMap: {
        acmeEndpointArn: "AcmeEndpointArn",
        accountUrl: "AccountUrl",
      },
    },
    { additionalProperties: s.json() },
  );
