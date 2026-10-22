import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountUpdaterJobCreate = {
  /** A list of payment method IDs to request an update for. */
  paymentMethodIds: string[];
};

export const accountUpdaterJobCreateSchema: Schema<AccountUpdaterJobCreate> =
  s.object<AccountUpdaterJobCreate>({
    paymentMethodIds: s.array(s.string()),
    _keysMap: {
      paymentMethodIds: "payment_method_ids",
    },
  });
