import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the network token. */
export const NetworkTokenStatus2 = {
  Active: "active",
  Inactive: "inactive",
  Suspended: "suspended",
  Deleted: "deleted",
} as const;
export type NetworkTokenStatus2 =
  | (typeof NetworkTokenStatus2)[keyof typeof NetworkTokenStatus2]
  | (string & {});

export const networkTokenStatus2Schema: EnumSchema<NetworkTokenStatus2> =
  s.enumOf<NetworkTokenStatus2>(NetworkTokenStatus2);
