import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormType = {
  SellerApplication: "seller_application",
  AcquisitionInquiry: "acquisition_inquiry",
  BuyerRegistration: "buyer_registration",
  NdaRequest: "nda_request",
  SourcingRequest: "sourcing_request",
  ListingRequest: "listing_request",
  Consultation: "consultation",
  Partnership: "partnership",
  Contact: "contact",
  Other: "other",
  VendorClaim: "vendor_claim",
  ListingClaim: "listing_claim",
  SponsorInquiry: "sponsor_inquiry",
  Advertiser: "advertiser",
  BrokerRequest: "broker_request",
  BuyerInquiry: "buyer_inquiry",
  SellerInquiry: "seller_inquiry",
  DataPurchase: "data_purchase",
} as const;
export type FormType = (typeof FormType)[keyof typeof FormType] | (string & {});

export const formTypeSchema: EnumSchema<FormType> = s.enumOf<FormType>(FormType);
