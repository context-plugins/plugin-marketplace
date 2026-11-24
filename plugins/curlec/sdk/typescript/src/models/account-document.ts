import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessProofOfAddressSchema, type BusinessProofOfAddress } from "./business-proof-of-address.js";
import {
  businessProofOfIdentificationSchema,
  type BusinessProofOfIdentification,
} from "./business-proof-of-identification.js";

/** KYC documents for a sub-merchant account. Files must be JPG/PNG (max 4MB) or PDF (max 2MB). */
export type AccountDocument = {
  businessProofOfIdentification?: BusinessProofOfIdentification[];
  businessProofOfAddress?: BusinessProofOfAddress[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountDocumentSchema: Schema<AccountDocument> = s.object<AccountDocument>(
  {
    businessProofOfIdentification: s.optional(s.array(s.lazy(() => businessProofOfIdentificationSchema))),
    businessProofOfAddress: s.optional(s.array(s.lazy(() => businessProofOfAddressSchema))),
    _keysMap: {
      businessProofOfIdentification: "business_proof_of_identification",
      businessProofOfAddress: "business_proof_of_address",
    },
  },
  { additionalProperties: s.json() },
);
