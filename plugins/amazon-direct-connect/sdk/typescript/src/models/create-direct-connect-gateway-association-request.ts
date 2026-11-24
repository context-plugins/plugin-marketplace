import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type CreateDirectConnectGatewayAssociationRequest = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId: string;
  /** The ID of the virtual private gateway or transit gateway. */
  gatewayId?: string;
  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway This parameter is required
   * when you create an association to a transit gateway. For information about how to set the
   * prefixes, see Allowed Prefixes in the Direct Connect User Guide.
   */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** The ID of the virtual private gateway. */
  virtualGatewayId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDirectConnectGatewayAssociationRequestSchema: Schema<CreateDirectConnectGatewayAssociationRequest> =
  s.object<CreateDirectConnectGatewayAssociationRequest>(
    {
      directConnectGatewayId: s.string(),
      gatewayId: s.optional(s.string()),
      addAllowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
      virtualGatewayId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
