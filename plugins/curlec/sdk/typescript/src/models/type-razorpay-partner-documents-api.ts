import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeRazorpayPartnerDocumentsApi = {
  BusinessProofUrl: "business_proof_url",
  GstCertificate: "gst_certificate",
  ShopEstablishmentCertificate: "shop_establishment_certificate",
  CertificateOfIncorporation: "certificate_of_incorporation",
  TrustDeed: "trust_deed",
  SocietyRegistrationCertificate: "society_registration_certificate",
} as const;
export type TypeRazorpayPartnerDocumentsApi =
  | (typeof TypeRazorpayPartnerDocumentsApi)[keyof typeof TypeRazorpayPartnerDocumentsApi]
  | (string & {});

export const typeRazorpayPartnerDocumentsApiSchema: EnumSchema<TypeRazorpayPartnerDocumentsApi> =
  s.enumOf<TypeRazorpayPartnerDocumentsApi>(TypeRazorpayPartnerDocumentsApi);
