import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the association. The following are the possible values: associating: The initial
 * state after calling CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway
 * and virtual private gateway or transit gateway are successfully associated and ready to pass
 * traffic. disassociating: The initial state after calling DeleteDirectConnectGatewayAssociation.
 * disassociated: The virtual private gateway or transit gateway is disassociated from the Direct
 * Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or
 * transit gateway is stopped.
 */
export const AssociationState = {
  Associating: "associating",
  Associated: "associated",
  Disassociating: "disassociating",
  Disassociated: "disassociated",
  Updating: "updating",
} as const;
export type AssociationState = (typeof AssociationState)[keyof typeof AssociationState] | (string & {});

export const associationStateSchema: EnumSchema<AssociationState> =
  s.enumOf<AssociationState>(AssociationState);
