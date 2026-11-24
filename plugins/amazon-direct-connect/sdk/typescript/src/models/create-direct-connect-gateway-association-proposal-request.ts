import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type CreateDirectConnectGatewayAssociationProposalRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId: string;
  /** The ID of the Amazon Web Services account that owns the Direct Connect gateway. */
  directConnectGatewayOwnerAccount: string;
  /** The ID of the virtual private gateway or transit gateway. */
  gatewayId: string;
  /** The Amazon VPC prefixes to advertise to the Direct Connect gateway. */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway. */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDirectConnectGatewayAssociationProposalRequestSchema: Schema<CreateDirectConnectGatewayAssociationProposalRequest> =
  s.object<CreateDirectConnectGatewayAssociationProposalRequest>(
    {
      directConnectGatewayId: s.string(),
      directConnectGatewayOwnerAccount: s.string(),
      gatewayId: s.string(),
      addAllowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
      removeAllowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
    },
    { additionalProperties: s.json() },
  );
