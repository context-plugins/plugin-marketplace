import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutgoingTransfer = {
  transferId?: string;
  settlementId?: string;
};

export const outgoingTransferSchema: Schema<OutgoingTransfer> = s.object<OutgoingTransfer>({
  transferId: s.optional(s.string()),
  settlementId: s.optional(s.string()),
});
