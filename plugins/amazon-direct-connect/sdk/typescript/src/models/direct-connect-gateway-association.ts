import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associatedCoreNetworkSchema, type AssociatedCoreNetwork } from "./associated-core-network.js";
import { associatedGatewaySchema, type AssociatedGateway } from "./associated-gateway.js";
import { associationStateSchema, type AssociationState } from "./association-state.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type DirectConnectGatewayAssociation = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The ID of the Amazon Web Services account that owns the associated gateway. */
  directConnectGatewayOwnerAccount?: string;
  /**
   * The state of the association. The following are the possible values: associating: The initial
   * state after calling CreateDirectConnectGatewayAssociation. associated: The Direct Connect
   * gateway and virtual private gateway or transit gateway are successfully associated and ready to
   * pass traffic. disassociating: The initial state after calling
   * DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit
   * gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct
   * Connect gateway and virtual private gateway or transit gateway is stopped.
   */
  associationState?: AssociationState;
  /** The error message if the state of an object failed to advance. */
  stateChangeError?: string;
  associatedGateway?: AssociatedGateway;
  /** The ID of the Direct Connect gateway association. */
  associationId?: string;
  /** The Amazon VPC prefixes to advertise to the Direct Connect gateway. */
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  associatedCoreNetwork?: AssociatedCoreNetwork;
  /** The ID of the virtual private gateway. Applies only to private virtual interfaces. */
  virtualGatewayId?: string;
  /** The Amazon Web Services Region where the virtual private gateway is located. */
  virtualGatewayRegion?: string;
  /** The ID of the Amazon Web Services account that owns the virtual private gateway. */
  virtualGatewayOwnerAccount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directConnectGatewayAssociationSchema: Schema<DirectConnectGatewayAssociation> =
  s.object<DirectConnectGatewayAssociation>(
    {
      directConnectGatewayId: s.optional(s.string()),
      directConnectGatewayOwnerAccount: s.optional(s.string()),
      associationState: s.optional(s.lazy(() => associationStateSchema)),
      stateChangeError: s.optional(s.string()),
      associatedGateway: s.optional(s.lazy(() => associatedGatewaySchema)),
      associationId: s.optional(s.string()),
      allowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
      associatedCoreNetwork: s.optional(s.lazy(() => associatedCoreNetworkSchema)),
      virtualGatewayId: s.optional(s.string()),
      virtualGatewayRegion: s.optional(s.string()),
      virtualGatewayOwnerAccount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
