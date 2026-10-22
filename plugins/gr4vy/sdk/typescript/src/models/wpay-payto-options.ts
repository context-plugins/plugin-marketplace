import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instrumentSchema, type Instrument } from "./unions/instrument.js";
import { paymentSchema, type Payment } from "./unions/payment.js";
import { refund11Schema, type Refund11 } from "./unions/refund11.js";

export type WpayPaytoOptions = {
  /** Options to pass to the `instrument` resource in the Wpay PayTo API. */
  instrument?: Instrument;
  /** Options to pass to the `payment` resource in the Wpay PayTo API. */
  payment?: Payment;
  /** Options to pass to the `refund` resource in the Wpay PayTo API. */
  refund?: Refund11;
};

export const wpayPaytoOptionsSchema: Schema<WpayPaytoOptions> = s.object<WpayPaytoOptions>({
  instrument: s.optional(s.lazy(() => instrumentSchema)),
  payment: s.optional(s.lazy(() => paymentSchema)),
  refund: s.optional(s.lazy(() => refund11Schema)),
});
