import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentcardbrandSchema, type Paymentcardbrand } from "./paymentcardbrand.js";
import { paymentcardnetworkSchema, type Paymentcardnetwork } from "./paymentcardnetwork.js";
import { paymentcardtypeSchema, type Paymentcardtype } from "./paymentcardtype.js";
import { pazeDigitalCardDataSchema, type PazeDigitalCardData } from "./paze-digital-card-data.js";
import { billingAddressSchema, type BillingAddress } from "./unions/billing-address.js";
import { panexpirationmonthSchema, type Panexpirationmonth } from "./unions/panexpirationmonth.js";
import { panexpirationyearSchema, type Panexpirationyear } from "./unions/panexpirationyear.js";

export type PazeMaskedCard = {
  /** Last four digits of the PAN. */
  panLastFour: string;
  /** Payment Account Reference (PAR). A non-financial reference assigned to each unique PAN. */
  paymentAccountReference: string;
  /** 2-digit PAN expiration month. */
  panExpirationMonth: Panexpirationmonth;
  /** 4-digit PAN expiration year. */
  panExpirationYear: Panexpirationyear;
  /** Free-form string used for card or program recognition. */
  paymentCardDescriptor: string;
  /** Card type. */
  paymentCardType: Paymentcardtype;
  /** Card brand. */
  paymentCardBrand: Paymentcardbrand;
  /** Card network. */
  paymentCardNetwork: Paymentcardnetwork;
  digitalCardData: PazeDigitalCardData;
  billingAddress: BillingAddress;
};

export const pazeMaskedCardSchema: Schema<PazeMaskedCard> = s.object<PazeMaskedCard>({
  panLastFour: s.string(),
  paymentAccountReference: s.string(),
  panExpirationMonth: panexpirationmonthSchema,
  panExpirationYear: panexpirationyearSchema,
  paymentCardDescriptor: s.string(),
  paymentCardType: paymentcardtypeSchema,
  paymentCardBrand: paymentcardbrandSchema,
  paymentCardNetwork: paymentcardnetworkSchema,
  digitalCardData: pazeDigitalCardDataSchema,
  billingAddress: billingAddressSchema,
});
