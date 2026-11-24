import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select custom unless the shipment will use the exact named carrier packaging. */
export const Type1 = {
  Custom: "custom",
  UspsFlatRateEnvelope: "usps_flat_rate_envelope",
  UspsPaddedFlatRateEnvelope: "usps_padded_flat_rate_envelope",
  UspsLegalFlatRateEnvelope: "usps_legal_flat_rate_envelope",
  UspsSmallFlatRateBox: "usps_small_flat_rate_box",
  UspsMediumFlatRateBox: "usps_medium_flat_rate_box",
  UspsLargeFlatRateBox: "usps_large_flat_rate_box",
  UspsExpressFlatRateEnvelope: "usps_express_flat_rate_envelope",
  FedexOneRateEnvelope: "fedex_one_rate_envelope",
  FedexOneRatePak: "fedex_one_rate_pak",
  FedexOneRateExtraSmallBox: "fedex_one_rate_extra_small_box",
  FedexOneRateSmallBox: "fedex_one_rate_small_box",
  FedexOneRateMediumBox: "fedex_one_rate_medium_box",
  FedexOneRateLargeBox: "fedex_one_rate_large_box",
  FedexOneRateExtraLargeBox: "fedex_one_rate_extra_large_box",
  FedexOneRateTube: "fedex_one_rate_tube",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
