import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event = {
  SignRequestSent: "sign_request.sent",
  SignRequestCompleted: "sign_request.completed",
  SignRequestCancelled: "sign_request.cancelled",
  SignerSigned: "signer.signed",
  SignerDeclined: "signer.declined",
  SignRequestRelaunched: "sign_request.relaunched",
  PublicFormSubmitted: "public_form.submitted",
  SignRequestSubmittedForApproval: "sign_request.submitted_for_approval",
  SignRequestApproved: "sign_request.approved",
  SignRequestRejected: "sign_request.rejected",
  PaymentCompleted: "payment.completed",
  PaymentFailed: "payment.failed",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
