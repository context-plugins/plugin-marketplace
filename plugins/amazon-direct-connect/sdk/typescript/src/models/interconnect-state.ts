import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the interconnect. The following are the possible values: requested: The initial
 * state of an interconnect. The interconnect stays in the requested state until the Letter of
 * Authorization (LOA) is sent to the customer. pending: The interconnect is approved, and is being
 * initialized. available: The network link is up, and the interconnect is ready for use. down: The
 * network link is down. deleting: The interconnect is being deleted. deleted: The interconnect is
 * deleted. unknown: The state of the interconnect is not available.
 */
export const InterconnectState = {
  Requested: "requested",
  Pending: "pending",
  Available: "available",
  Down: "down",
  Deleting: "deleting",
  Deleted: "deleted",
  Unknown: "unknown",
} as const;
export type InterconnectState = (typeof InterconnectState)[keyof typeof InterconnectState] | (string & {});

export const interconnectStateSchema: EnumSchema<InterconnectState> =
  s.enumOf<InterconnectState>(InterconnectState);
