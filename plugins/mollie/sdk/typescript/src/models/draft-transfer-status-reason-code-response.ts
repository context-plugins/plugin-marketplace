import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code that indicates the reason for the draft transfer's current status. */
export const DraftTransferStatusReasonCodeResponse = {
  DeletedByCreator: "deleted-by-creator",
  DeclinedByInitiator: "declined-by-initiator",
  AccountClosed: "account-closed",
} as const;
export type DraftTransferStatusReasonCodeResponse =
  | (typeof DraftTransferStatusReasonCodeResponse)[keyof typeof DraftTransferStatusReasonCodeResponse]
  | (string & {});

export const draftTransferStatusReasonCodeResponseSchema: EnumSchema<DraftTransferStatusReasonCodeResponse> =
  s.enumOf<DraftTransferStatusReasonCodeResponse>(DraftTransferStatusReasonCodeResponse);
