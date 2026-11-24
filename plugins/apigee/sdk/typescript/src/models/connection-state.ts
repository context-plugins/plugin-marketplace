import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. State of the endpoint attachment connection to the service attachment. */
export const ConnectionState = {
  ConnectionStateUnspecified: "CONNECTION_STATE_UNSPECIFIED",
  Unavailable: "UNAVAILABLE",
  Pending: "PENDING",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  Closed: "CLOSED",
  Frozen: "FROZEN",
  NeedsAttention: "NEEDS_ATTENTION",
  AcceptedLimitedCapacity: "ACCEPTED_LIMITED_CAPACITY",
} as const;
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState] | (string & {});

export const connectionStateSchema: EnumSchema<ConnectionState> = s.enumOf<ConnectionState>(ConnectionState);
