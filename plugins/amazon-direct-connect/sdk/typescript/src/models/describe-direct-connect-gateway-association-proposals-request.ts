import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDirectConnectGatewayAssociationProposalsRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The ID of the proposal. */
  proposalId?: string;
  /** The ID of the associated gateway. */
  associatedGatewayId?: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value. If MaxResults is given a value larger than
   * 100, only 100 results are returned.
   */
  maxResults?: number;
  /** The token for the next page of results. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewayAssociationProposalsRequestSchema: Schema<DescribeDirectConnectGatewayAssociationProposalsRequest> =
  s.object<DescribeDirectConnectGatewayAssociationProposalsRequest>(
    {
      directConnectGatewayId: s.optional(s.string()),
      proposalId: s.optional(s.string()),
      associatedGatewayId: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
