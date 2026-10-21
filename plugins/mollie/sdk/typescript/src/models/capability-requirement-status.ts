import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the requirement depends on its due date. If no due date is given, the status will
 * be `requested`.
 */
export const CapabilityRequirementStatus = {
  CurrentlyDue: "currently-due",
  PastDue: "past-due",
  Requested: "requested",
} as const;
export type CapabilityRequirementStatus =
  | (typeof CapabilityRequirementStatus)[keyof typeof CapabilityRequirementStatus]
  | (string & {});

export const capabilityRequirementStatusSchema: EnumSchema<CapabilityRequirementStatus> =
  s.enumOf<CapabilityRequirementStatus>(CapabilityRequirementStatus);
