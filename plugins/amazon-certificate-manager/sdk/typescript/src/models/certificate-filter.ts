import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acmCertificateMetadataFilterSchema,
  type AcmCertificateMetadataFilter,
} from "./acm-certificate-metadata-filter.js";
import { x509AttributeFilterSchema, type X509AttributeFilter } from "./x509-attribute-filter.js";

/** Exactly one member is set. */
export type CertificateFilter = {
  /** Filter by certificate ARN. */
  certificateArn?: string;
  /** Exactly one member is set. */
  x509AttributeFilter?: X509AttributeFilter;
  /** Exactly one member is set. */
  acmCertificateMetadataFilter?: AcmCertificateMetadataFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateFilterSchema: Schema<CertificateFilter> = s.object<CertificateFilter>(
  {
    certificateArn: s.optional(s.string()),
    x509AttributeFilter: s.optional(s.lazy(() => x509AttributeFilterSchema)),
    acmCertificateMetadataFilter: s.optional(s.lazy(() => acmCertificateMetadataFilterSchema)),
    _keysMap: {
      certificateArn: "CertificateArn",
      x509AttributeFilter: "X509AttributeFilter",
      acmCertificateMetadataFilter: "AcmCertificateMetadataFilter",
    },
  },
  { additionalProperties: s.json() },
);
