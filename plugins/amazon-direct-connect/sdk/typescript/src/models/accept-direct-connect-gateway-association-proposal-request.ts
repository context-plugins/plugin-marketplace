import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type AcceptDirectConnectGatewayAssociationProposalRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId: string;
  /** The ID of the request proposal. */
  proposalId: string;
  /**
   * The ID of the Amazon Web Services account that owns the virtual private gateway or transit
   * gateway.
   */
  associatedGatewayOwnerAccount: string;
  /**
   * Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway. For information
   * about how to set the prefixes, see Allowed Prefixes in the Direct Connect User Guide.
   */
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acceptDirectConnectGatewayAssociationProposalRequestSchema: Schema<AcceptDirectConnectGatewayAssociationProposalRequest> =
  s.object<AcceptDirectConnectGatewayAssociationProposalRequest>(
    {
      directConnectGatewayId: s.string(),
      proposalId: s.string(),
      associatedGatewayOwnerAccount: s.string(),
      overrideAllowedPrefixesToDirectConnectGateway: s.optional(
        s.array(s.lazy(() => routeFilterPrefixSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
