import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { massPaymentSchema, type MassPayment } from "./mass-payment.js";

export type Embedded3 = {
  massPayments?: MassPayment[];
};

export const embedded3Schema: Schema<Embedded3> = s.object<Embedded3>({
  massPayments: s.optional(s.array(s.lazy(() => massPaymentSchema))),
  _keysMap: {
    massPayments: "mass-payments",
  },
});
