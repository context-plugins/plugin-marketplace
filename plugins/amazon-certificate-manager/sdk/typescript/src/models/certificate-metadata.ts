import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmCertificateMetadataSchema, type AcmCertificateMetadata } from "./acm-certificate-metadata.js";

/** Exactly one member is set. */
export type CertificateMetadata = {
  acmCertificateMetadata?: AcmCertificateMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateMetadataSchema: Schema<CertificateMetadata> = s.object<CertificateMetadata>(
  {
    acmCertificateMetadata: s.optional(s.lazy(() => acmCertificateMetadataSchema)),
    _keysMap: {
      acmCertificateMetadata: "AcmCertificateMetadata",
    },
  },
  { additionalProperties: s.json() },
);
