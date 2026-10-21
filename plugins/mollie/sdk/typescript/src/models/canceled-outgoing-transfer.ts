import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanceledOutgoingTransfer = {
  transferId?: string;
  settlementId?: string;
};

export const canceledOutgoingTransferSchema: Schema<CanceledOutgoingTransfer> =
  s.object<CanceledOutgoingTransfer>({
    transferId: s.optional(s.string()),
    settlementId: s.optional(s.string()),
  });
