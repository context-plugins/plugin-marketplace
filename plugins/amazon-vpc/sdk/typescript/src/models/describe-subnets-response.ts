import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subnetSchema, type Subnet } from "./subnet.js";

/** Response from the DescribeSubnets action */
export type DescribeSubnetsResponse = {
  /** Information about the subnets */
  subnetSet?: Subnet[];
  /** Token for the next page of results */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSubnetsResponseSchema: Schema<DescribeSubnetsResponse> =
  s.object<DescribeSubnetsResponse>(
    {
      subnetSet: s.optional(s.array(s.lazy(() => subnetSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
