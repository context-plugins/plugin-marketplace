import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDirectConnectGatewaysRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value. If MaxResults is given a value larger than
   * 100, only 100 results are returned.
   */
  maxResults?: number;
  /** The token provided in the previous call to retrieve the next page. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewaysRequestSchema: Schema<DescribeDirectConnectGatewaysRequest> =
  s.object<DescribeDirectConnectGatewaysRequest>(
    {
      directConnectGatewayId: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
