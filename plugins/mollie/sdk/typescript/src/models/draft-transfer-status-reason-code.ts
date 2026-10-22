import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code that indicates the reason for the draft transfer's current status. */
export const DraftTransferStatusReasonCode = {
  DeletedByCreator: "deleted-by-creator",
  DeclinedByInitiator: "declined-by-initiator",
  AccountClosed: "account-closed",
} as const;
export type DraftTransferStatusReasonCode =
  | (typeof DraftTransferStatusReasonCode)[keyof typeof DraftTransferStatusReasonCode]
  | (string & {});

export const draftTransferStatusReasonCodeSchema: EnumSchema<DraftTransferStatusReasonCode> =
  s.enumOf<DraftTransferStatusReasonCode>(DraftTransferStatusReasonCode);
