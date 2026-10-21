import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type10, type10Schema } from "./type10.js";
import {
  additionalSchemesDetailsSchema,
  type AdditionalSchemesDetails,
} from "./unions/additional-schemes-details.js";
import { additionalSchemesSchema, type AdditionalSchemes } from "./unions/additional-schemes.js";
import { cardType1Schema, type CardType1 } from "./unions/card-type1.js";
import { country1Schema, type Country1 } from "./unions/country1.js";
import { id2Schema, type Id2 } from "./unions/id2.js";
import { requiredFields1ModelSchema, type RequiredFields1Model } from "./unions/required-fields1-model.js";
import { schemeIconUrlSchema, type SchemeIconUrl } from "./unions/scheme-icon-url.js";
import { scheme21Schema, type Scheme21 } from "./unions/scheme21.js";

export type CardDetail = {
  /** Always `card-detail`. @default Type10.CardDetail */
  type?: Type10;
  /** The Bank Identification Number (BIN) of the card. */
  id?: Id2;
  /** The type of the card. */
  cardType?: CardType1;
  /** The card scheme/network. */
  scheme?: Scheme21;
  /** Additional schemes of the card besides the primary scheme. */
  additionalSchemes?: AdditionalSchemes;
  /**
   * Per-scheme details (name and icon URL) for each additional scheme. Mirrors `additional_schemes`
   * — null when `additional_schemes` is null.
   */
  additionalSchemesDetails?: AdditionalSchemesDetails;
  /** URL to the card scheme's icon. */
  schemeIconUrl?: SchemeIconUrl;
  /** The country code associated with the card. */
  country?: Country1;
  /** Fields that are required for this card type. */
  requiredFields?: RequiredFields1Model;
};

export const cardDetailSchema: Schema<CardDetail> = s.object<CardDetail>({
  type: s.defaulted(type10Schema, Type10.CardDetail),
  id: s.optional(s.lazy(() => id2Schema)),
  cardType: s.optional(s.lazy(() => cardType1Schema)),
  scheme: s.optional(s.lazy(() => scheme21Schema)),
  additionalSchemes: s.optional(s.lazy(() => additionalSchemesSchema)),
  additionalSchemesDetails: s.optional(s.lazy(() => additionalSchemesDetailsSchema)),
  schemeIconUrl: s.optional(s.lazy(() => schemeIconUrlSchema)),
  country: s.optional(s.lazy(() => country1Schema)),
  requiredFields: s.optional(s.lazy(() => requiredFields1ModelSchema)),
  _keysMap: {
    cardType: "card_type",
    additionalSchemes: "additional_schemes",
    additionalSchemesDetails: "additional_schemes_details",
    schemeIconUrl: "scheme_icon_url",
    requiredFields: "required_fields",
  },
});
