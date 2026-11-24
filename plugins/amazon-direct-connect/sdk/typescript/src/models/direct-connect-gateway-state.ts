import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the Direct Connect gateway. The following are the possible values: pending: The
 * initial state after calling CreateDirectConnectGateway. available: The Direct Connect gateway is
 * ready for use. deleting: The initial state after calling DeleteDirectConnectGateway. deleted: The
 * Direct Connect gateway is deleted and cannot pass traffic.
 */
export const DirectConnectGatewayState = {
  Pending: "pending",
  Available: "available",
  Deleting: "deleting",
  Deleted: "deleted",
} as const;
export type DirectConnectGatewayState =
  | (typeof DirectConnectGatewayState)[keyof typeof DirectConnectGatewayState]
  | (string & {});

export const directConnectGatewayStateSchema: EnumSchema<DirectConnectGatewayState> =
  s.enumOf<DirectConnectGatewayState>(DirectConnectGatewayState);
