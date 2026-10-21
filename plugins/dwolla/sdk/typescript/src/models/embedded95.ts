import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { massPaymentItemSchema, type MassPaymentItem } from "./mass-payment-item.js";

export type Embedded95 = {
  items?: MassPaymentItem[];
};

export const embedded95Schema: Schema<Embedded95> = s.object<Embedded95>({
  items: s.optional(s.array(s.lazy(() => massPaymentItemSchema))),
});
