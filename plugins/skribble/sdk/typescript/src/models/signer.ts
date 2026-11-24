import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionalSignerInfosSchema, type OptionalSignerInfos } from "./optional-signer-infos.js";
import { signerCertificateSchema, type SignerCertificate } from "./signer-certificate.js";

export type Signer = {
  valid?: boolean;
  signer?: string;
  time?: Date;
  quality?: string;
  legislation?: string;
  longTermValidation?: boolean;
  visualDifferences?: boolean;
  undefinedChanges?: boolean;
  certificate?: SignerCertificate;
  optionalInfos?: OptionalSignerInfos;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signerSchema: Schema<Signer> = s.object<Signer>(
  {
    valid: s.optional(s.boolean()),
    signer: s.optional(s.string()),
    time: s.optional(s.dateTime()),
    quality: s.optional(s.string()),
    legislation: s.optional(s.string()),
    longTermValidation: s.optional(s.boolean()),
    visualDifferences: s.optional(s.boolean()),
    undefinedChanges: s.optional(s.boolean()),
    certificate: s.optional(s.lazy(() => signerCertificateSchema)),
    optionalInfos: s.optional(s.lazy(() => optionalSignerInfosSchema)),
  },
  { additionalProperties: s.json() },
);
