import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  draftTransferStatusReasonCodeResponseSchema,
  type DraftTransferStatusReasonCodeResponse,
} from "./draft-transfer-status-reason-code-response.js";

/** The reason for the draft transfer's current status. `null` unless `status` is `declined`. */
export type DraftTransferStatusReason = {
  /** A machine-readable code that indicates the reason for the draft transfer's current status. */
  code: DraftTransferStatusReasonCodeResponse;
  /**
   * A human-readable explanation of the status reason. For `declined-by-initiator`, this includes
   * the initiator's free-text reason when they provided one.
   */
  message: string;
};

export const draftTransferStatusReasonSchema: Schema<DraftTransferStatusReason> =
  s.object<DraftTransferStatusReason>({
    code: draftTransferStatusReasonCodeResponseSchema,
    message: s.string(),
  });
