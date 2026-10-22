import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the draft transfer. */
export const DraftTransferStatusResponse = {
  PendingReview: "pending-review",
  Approved: "approved",
  Declined: "declined",
} as const;
export type DraftTransferStatusResponse =
  | (typeof DraftTransferStatusResponse)[keyof typeof DraftTransferStatusResponse]
  | (string & {});

export const draftTransferStatusResponseSchema: EnumSchema<DraftTransferStatusResponse> =
  s.enumOf<DraftTransferStatusResponse>(DraftTransferStatusResponse);
