import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignerCertificate = {
  subject?: string;
  issuer?: string;
  serialNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signerCertificateSchema: Schema<SignerCertificate> = s.object<SignerCertificate>(
  {
    subject: s.optional(s.string()),
    issuer: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
