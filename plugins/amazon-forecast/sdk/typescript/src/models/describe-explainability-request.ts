import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeExplainabilityRequest = {
  /** The Amazon Resource Name (ARN) of the Explaianability to describe. */
  explainabilityArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExplainabilityRequestSchema: Schema<DescribeExplainabilityRequest> =
  s.object<DescribeExplainabilityRequest>(
    {
      explainabilityArn: s.string(),
      _keysMap: {
        explainabilityArn: "ExplainabilityArn",
      },
    },
    { additionalProperties: s.json() },
  );
