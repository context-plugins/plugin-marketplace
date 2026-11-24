import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeWorkingStorageInput = {
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWorkingStorageInputSchema: Schema<DescribeWorkingStorageInput> =
  s.object<DescribeWorkingStorageInput>(
    {
      gatewayArn: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
