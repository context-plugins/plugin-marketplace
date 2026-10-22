import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityPaymentLinkSchema, type EntityPaymentLink } from "./entity-payment-link.js";

export type Embedded26 = {
  /** An array of payment link objects. */
  paymentLinks?: EntityPaymentLink[];
};

export const embedded26Schema: Schema<Embedded26> = s.object<Embedded26>({
  paymentLinks: s.optional(s.array(s.lazy(() => entityPaymentLinkSchema))),
  _keysMap: {
    paymentLinks: "payment_links",
  },
});
