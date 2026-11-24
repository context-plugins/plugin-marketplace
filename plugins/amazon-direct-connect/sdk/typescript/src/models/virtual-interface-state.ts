import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the virtual interface. The following are the possible values: confirming: The
 * creation of the virtual interface is pending confirmation from the virtual interface owner. If
 * the owner of the virtual interface is different from the owner of the connection on which it is
 * provisioned, then the virtual interface will remain in this state until it is confirmed by the
 * virtual interface owner. verifying: This state only applies to public virtual interfaces. Each
 * public virtual interface needs validation before the virtual interface can be created. pending: A
 * virtual interface is in this s
 */
export const VirtualInterfaceState = {
  Confirming: "confirming",
  Verifying: "verifying",
  Pending: "pending",
  Available: "available",
  Down: "down",
  Testing: "testing",
  Deleting: "deleting",
  Deleted: "deleted",
  Rejected: "rejected",
  Unknown: "unknown",
} as const;
export type VirtualInterfaceState =
  | (typeof VirtualInterfaceState)[keyof typeof VirtualInterfaceState]
  | (string & {});

export const virtualInterfaceStateSchema: EnumSchema<VirtualInterfaceState> =
  s.enumOf<VirtualInterfaceState>(VirtualInterfaceState);
