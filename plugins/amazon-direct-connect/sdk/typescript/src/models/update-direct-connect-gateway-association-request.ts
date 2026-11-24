import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";

export type UpdateDirectConnectGatewayAssociationRequest = {
  /** The ID of the Direct Connect gateway association. */
  associationId?: string;
  /** The Amazon VPC prefixes to advertise to the Direct Connect gateway. */
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway. */
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDirectConnectGatewayAssociationRequestSchema: Schema<UpdateDirectConnectGatewayAssociationRequest> =
  s.object<UpdateDirectConnectGatewayAssociationRequest>(
    {
      associationId: s.optional(s.string()),
      addAllowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
      removeAllowedPrefixesToDirectConnectGateway: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
    },
    { additionalProperties: s.json() },
  );
