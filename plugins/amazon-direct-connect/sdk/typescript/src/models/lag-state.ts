import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the LAG. The following are the possible values: requested: The initial state of a
 * LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.
 * pending: The LAG has been approved and is being initialized. available: The network link is
 * established and the LAG is ready for use. down: The network link is down. deleting: The LAG is
 * being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not available.
 */
export const LagState = {
  Requested: "requested",
  Pending: "pending",
  Available: "available",
  Down: "down",
  Deleting: "deleting",
  Deleted: "deleted",
  Unknown: "unknown",
} as const;
export type LagState = (typeof LagState)[keyof typeof LagState] | (string & {});

export const lagStateSchema: EnumSchema<LagState> = s.enumOf<LagState>(LagState);
