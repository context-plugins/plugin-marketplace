import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associatedGatewaySchema, type AssociatedGateway } from "./associated-gateway.js";
import { proposalStateSchema, type ProposalState } from "./proposal-state.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type DirectConnectGatewayAssociationProposal = {
  /** The ID of the association proposal. */
  proposalId?: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The ID of the Amazon Web Services account that owns the Direct Connect gateway. */
  directConnectGatewayOwnerAccount?: string;
  /**
   * The state of the proposal. The following are possible values: accepted: The proposal has been
   * accepted. The Direct Connect gateway association is available to use in this state. deleted:
   * The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway
   * association cannot be used in this state. requested: The proposal has been requested. The
   * Direct Connect gateway association cannot be used in this state.
   */
  proposalState?: ProposalState;
  associatedGateway?: AssociatedGateway;
  /** The existing Amazon VPC prefixes advertised to the Direct Connect gateway. */
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** The Amazon VPC prefixes to advertise to the Direct Connect gateway. */
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directConnectGatewayAssociationProposalSchema: Schema<DirectConnectGatewayAssociationProposal> =
  s.object<DirectConnectGatewayAssociationProposal>(
    {
      proposalId: s.optional(s.string()),
      directConnectGatewayId: s.optional(s.string()),
      directConnectGatewayOwnerAccount: s.optional(s.string()),
      proposalState: s.optional(s.lazy(() => proposalStateSchema)),
      associatedGateway: s.optional(s.lazy(() => associatedGatewaySchema)),
      existingAllowedPrefixesToDirectConnectGateway: s.optional(
        s.array(s.lazy(() => routeFilterPrefixSchema)),
      ),
      requestedAllowedPrefixesToDirectConnectGateway: s.optional(
        s.array(s.lazy(() => routeFilterPrefixSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
