import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundSettlementSchema, type RefundSettlement } from "./refund-settlement.js";

/** A list of settlement records for the refunds on a transaction. */
export type RefundSettlements = {
  /** The list of refund settlement objects. */
  items: RefundSettlement[];
};

export const refundSettlementsSchema: Schema<RefundSettlements> = s.object<RefundSettlements>({
  items: s.array(s.lazy(() => refundSettlementSchema)),
});
