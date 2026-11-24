import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType = {
  BusinessProofUrl: "business_proof_url",
  GstCertificate: "gst_certificate",
  ShopEstablishmentCertificate: "shop_establishment_certificate",
  CertificateOfIncorporation: "certificate_of_incorporation",
  TrustDeed: "trust_deed",
  SocietyRegistrationCertificate: "society_registration_certificate",
} as const;
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType] | (string & {});

export const documentTypeSchema: EnumSchema<DocumentType> = s.enumOf<DocumentType>(DocumentType);
