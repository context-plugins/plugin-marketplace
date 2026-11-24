import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDirectConnectGatewayAssociationProposalRequest = {
  /** The ID of the proposal. */
  proposalId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDirectConnectGatewayAssociationProposalRequestSchema: Schema<DeleteDirectConnectGatewayAssociationProposalRequest> =
  s.object<DeleteDirectConnectGatewayAssociationProposalRequest>(
    {
      proposalId: s.string(),
    },
    { additionalProperties: s.json() },
  );
