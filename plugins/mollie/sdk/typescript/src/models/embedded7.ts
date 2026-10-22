import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSettlementChargebackResponseSchema,
  type ListSettlementChargebackResponse,
} from "./list-settlement-chargeback-response.js";

export type Embedded7 = {
  /** A list of chargeback objects. */
  chargebacks: ListSettlementChargebackResponse[];
};

export const embedded7Schema: Schema<Embedded7> = s.object<Embedded7>({
  chargebacks: s.array(s.lazy(() => listSettlementChargebackResponseSchema)),
});
