import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTagsRequest = {
  /** The Amazon Resource Names (ARNs) of the resources. */
  resourceArns: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTagsRequestSchema: Schema<DescribeTagsRequest> = s.object<DescribeTagsRequest>(
  {
    resourceArns: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
