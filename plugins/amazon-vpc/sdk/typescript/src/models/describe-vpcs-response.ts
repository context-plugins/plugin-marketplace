import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vpcSchema, type Vpc } from "./vpc.js";

/** Response from the DescribeVpcs action */
export type DescribeVpcsResponse = {
  /** Information about the VPCs */
  vpcSet?: Vpc[];
  /** Token for the next page of results */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeVpcsResponseSchema: Schema<DescribeVpcsResponse> = s.object<DescribeVpcsResponse>(
  {
    vpcSet: s.optional(s.array(s.lazy(() => vpcSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
