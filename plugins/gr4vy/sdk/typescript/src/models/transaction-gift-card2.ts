import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type31, type31Schema } from "./type31.js";
import { id4Schema, type Id4 } from "./unions/id4.js";

/** The gift card used for this redemption */
export type TransactionGiftCard2 = {
  /** Always `gift-card`. @default Type31.GiftCard */
  type?: Type31;
  /** The ID for the gift card. */
  id?: Id4;
  /** The first 6 digits of the full gift card number. */
  bin: string;
  /** The 3 digits after the `bin` of the full gift card number. */
  subBin: string;
  /** The last 4 digits for the gift card. */
  last4: string;
};

export const transactionGiftCard2Schema: Schema<TransactionGiftCard2> = s.object<TransactionGiftCard2>({
  type: s.defaulted(type31Schema, Type31.GiftCard),
  id: s.optional(s.lazy(() => id4Schema)),
  bin: s.string(),
  subBin: s.string(),
  last4: s.string(),
  _keysMap: {
    subBin: "sub_bin",
  },
});
