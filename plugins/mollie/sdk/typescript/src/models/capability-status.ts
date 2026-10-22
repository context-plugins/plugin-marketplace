import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CapabilityStatus = {
  Unrequested: "unrequested",
  Enabled: "enabled",
  Disabled: "disabled",
  Pending: "pending",
} as const;
export type CapabilityStatus = (typeof CapabilityStatus)[keyof typeof CapabilityStatus] | (string & {});

export const capabilityStatusSchema: EnumSchema<CapabilityStatus> =
  s.enumOf<CapabilityStatus>(CapabilityStatus);
