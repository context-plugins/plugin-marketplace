import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayAssociationProposalSchema,
  type DirectConnectGatewayAssociationProposal,
} from "./direct-connect-gateway-association-proposal.js";

export type DescribeDirectConnectGatewayAssociationProposalsResult = {
  /** Describes the Direct Connect gateway association proposals. */
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewayAssociationProposalsResultSchema: Schema<DescribeDirectConnectGatewayAssociationProposalsResult> =
  s.object<DescribeDirectConnectGatewayAssociationProposalsResult>(
    {
      directConnectGatewayAssociationProposals: s.optional(
        s.array(s.lazy(() => directConnectGatewayAssociationProposalSchema)),
      ),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
