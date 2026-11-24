import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the invitation from customer/vendor to an organization. */
export const NetworkInvitationStatus = {
  NotConnected: "NOT_CONNECTED",
  Pending: "PENDING",
  Connected: "CONNECTED",
  ConnectedRpps: "CONNECTED_RPPS",
} as const;
export type NetworkInvitationStatus =
  | (typeof NetworkInvitationStatus)[keyof typeof NetworkInvitationStatus]
  | (string & {});

export const networkInvitationStatusSchema: EnumSchema<NetworkInvitationStatus> =
  s.enumOf<NetworkInvitationStatus>(NetworkInvitationStatus);
