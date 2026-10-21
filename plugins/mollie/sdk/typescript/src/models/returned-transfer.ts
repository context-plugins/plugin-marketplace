import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnedTransfer = {
  transferId?: string;
  settlementId?: string;
};

export const returnedTransferSchema: Schema<ReturnedTransfer> = s.object<ReturnedTransfer>({
  transferId: s.optional(s.string()),
  settlementId: s.optional(s.string()),
});
