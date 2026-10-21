import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalIdentifier17Schema, type ExternalIdentifier17 } from "./unions/external-identifier17.js";

/** The details used to issue a new virtual gift card. */
export type GiftCardIssuanceCreate = {
  /** The provider theme code to issue the gift card against. */
  theme: string;
  /** The amount to load onto the gift card, in the smallest denomination for the currency. */
  amount: number;
  /** The ISO-4217 currency code for the `amount`. */
  currency: string;
  /** An optional external identifier for this issuance. */
  externalIdentifier?: ExternalIdentifier17;
};

export const giftCardIssuanceCreateSchema: Schema<GiftCardIssuanceCreate> = s.object<GiftCardIssuanceCreate>({
  theme: s.string(),
  amount: s.int(),
  currency: s.string(),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier17Schema)),
  _keysMap: {
    externalIdentifier: "external_identifier",
  },
});
