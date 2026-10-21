import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NetworkTokenStatus = {
  Active: "active",
  Inactive: "inactive",
  Suspended: "suspended",
  Deleted: "deleted",
} as const;
export type NetworkTokenStatus = (typeof NetworkTokenStatus)[keyof typeof NetworkTokenStatus] | (string & {});

export const networkTokenStatusSchema: EnumSchema<NetworkTokenStatus> =
  s.enumOf<NetworkTokenStatus>(NetworkTokenStatus);
