import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method14, method14Schema } from "./method14.js";

export type PaymentMethodStoredCard = {
  /** Set to `id` to use a stored card. @default Method14.Id */
  method?: Method14;
  /** The ID of the stored card to use. */
  id: string;
};

export const paymentMethodStoredCardSchema: Schema<PaymentMethodStoredCard> =
  s.object<PaymentMethodStoredCard>({
    method: s.defaulted(method14Schema, Method14.Id),
    id: s.string(),
  });
