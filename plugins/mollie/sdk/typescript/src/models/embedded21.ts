import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityRefundSchema, type ListEntityRefund } from "./list-entity-refund.js";

export type Embedded21 = {
  /** An array of refund objects. */
  refunds: ListEntityRefund[];
};

export const embedded21Schema: Schema<Embedded21> = s.object<Embedded21>({
  refunds: s.array(s.lazy(() => listEntityRefundSchema)),
});
