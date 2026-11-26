import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Virtual Card Status enum. */
export const VirtualCardStatus = {
  Undefined: "UNDEFINED",
  Open: "OPEN",
  Pending: "PENDING",
  RequireMoreInfo: "REQUIRE_MORE_INFO",
  PayForYourOpportunity: "PAY_FOR_YOUR_OPPORTUNITY",
  PhoneNumberNeeded: "PHONE_NUMBER_NEEDED",
  Enrolled: "ENROLLED",
  Declined: "DECLINED",
  Confirmed: "CONFIRMED",
  Recruiting: "RECRUITING",
  VerbalCommitment: "VERBAL_COMMITMENT",
  PayerAssist: "PAYER_ASSIST",
  OnHold: "ON_HOLD",
  Unknown: "UNKNOWN",
} as const;
export type VirtualCardStatus = (typeof VirtualCardStatus)[keyof typeof VirtualCardStatus] | (string & {});

export const virtualCardStatusSchema: EnumSchema<VirtualCardStatus> =
  s.enumOf<VirtualCardStatus>(VirtualCardStatus);
