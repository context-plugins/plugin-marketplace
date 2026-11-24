import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteDirectConnectGatewayAssociationRequest = {
  /** The ID of the Direct Connect gateway association. */
  associationId?: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The ID of the virtual private gateway. */
  virtualGatewayId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteDirectConnectGatewayAssociationRequestSchema: Schema<DeleteDirectConnectGatewayAssociationRequest> =
  s.object<DeleteDirectConnectGatewayAssociationRequest>(
    {
      associationId: s.optional(s.string()),
      directConnectGatewayId: s.optional(s.string()),
      virtualGatewayId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
