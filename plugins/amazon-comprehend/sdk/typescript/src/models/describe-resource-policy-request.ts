import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeResourcePolicyRequest = {
  /** The Amazon Resource Name (ARN) of the custom model version that has the resource policy. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeResourcePolicyRequestSchema: Schema<DescribeResourcePolicyRequest> =
  s.object<DescribeResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      _keysMap: {
        resourceArn: "ResourceArn",
      },
    },
    { additionalProperties: s.json() },
  );
