import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayAssociationProposalSchema,
  type DirectConnectGatewayAssociationProposal,
} from "./direct-connect-gateway-association-proposal.js";

export type DeleteDirectConnectGatewayAssociationProposalResult = {
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDirectConnectGatewayAssociationProposalResultSchema: Schema<DeleteDirectConnectGatewayAssociationProposalResult> =
  s.object<DeleteDirectConnectGatewayAssociationProposalResult>(
    {
      directConnectGatewayAssociationProposal: s.optional(
        s.lazy(() => directConnectGatewayAssociationProposalSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
