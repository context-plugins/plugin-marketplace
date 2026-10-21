import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSettlementRefundResponseSchema,
  type ListSettlementRefundResponse,
} from "./list-settlement-refund-response.js";

export type Embedded6 = {
  /** An array of refund objects. */
  refunds: ListSettlementRefundResponse[];
};

export const embedded6Schema: Schema<Embedded6> = s.object<Embedded6>({
  refunds: s.array(s.lazy(() => listSettlementRefundResponseSchema)),
});
