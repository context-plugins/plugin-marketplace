import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeUploadBufferInput = {
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeUploadBufferInputSchema: Schema<DescribeUploadBufferInput> =
  s.object<DescribeUploadBufferInput>(
    {
      gatewayArn: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
