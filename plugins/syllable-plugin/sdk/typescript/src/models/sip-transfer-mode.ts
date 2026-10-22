import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How a call should be transferred to a SIP endpoint. */
export const SipTransferMode = {
  Refer: "refer",
  Invite: "invite",
} as const;
export type SipTransferMode = (typeof SipTransferMode)[keyof typeof SipTransferMode] | (string & {});

export const sipTransferModeSchema: EnumSchema<SipTransferMode> = s.enumOf<SipTransferMode>(SipTransferMode);
