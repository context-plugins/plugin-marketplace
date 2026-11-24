import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the connection. The following are the possible values: ordering: The initial state
 * of a hosted connection provisioned on an interconnect. The connection stays in the ordering state
 * until the owner of the hosted connection confirms or declines the connection order. requested:
 * The initial state of a standard connection. The connection stays in the requested state until the
 * Letter of Authorization (LOA) is sent to the customer. pending: The connection has been approved
 * and is being initialized. available: The network link is up and the connection is ready for use.
 * down: The network l
 */
export const ConnectionState = {
  Ordering: "ordering",
  Requested: "requested",
  Pending: "pending",
  Available: "available",
  Down: "down",
  Deleting: "deleting",
  Deleted: "deleted",
  Rejected: "rejected",
  Unknown: "unknown",
} as const;
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState] | (string & {});

export const connectionStateSchema: EnumSchema<ConnectionState> = s.enumOf<ConnectionState>(ConnectionState);
