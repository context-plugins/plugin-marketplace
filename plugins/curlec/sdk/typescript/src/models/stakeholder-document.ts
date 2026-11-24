import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  individualProofOfAddressSchema,
  type IndividualProofOfAddress,
} from "./individual-proof-of-address.js";
import {
  individualProofOfIdentificationSchema,
  type IndividualProofOfIdentification,
} from "./individual-proof-of-identification.js";

/**
 * KYC documents for a stakeholder. Supports PAN, Aadhaar, passport, and voter ID. Files must be
 * JPG/PNG (max 4MB) or PDF (max 2MB).
 */
export type StakeholderDocument = {
  individualProofOfAddress?: IndividualProofOfAddress[];
  individualProofOfIdentification?: IndividualProofOfIdentification[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stakeholderDocumentSchema: Schema<StakeholderDocument> = s.object<StakeholderDocument>(
  {
    individualProofOfAddress: s.optional(s.array(s.lazy(() => individualProofOfAddressSchema))),
    individualProofOfIdentification: s.optional(s.array(s.lazy(() => individualProofOfIdentificationSchema))),
    _keysMap: {
      individualProofOfAddress: "individual_proof_of_address",
      individualProofOfIdentification: "individual_proof_of_identification",
    },
  },
  { additionalProperties: s.json() },
);
