import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateMetadataSchema, type CertificateMetadata } from "./certificate-metadata.js";
import { x509AttributesSchema, type X509Attributes } from "./x509-attributes.js";

export type CertificateSearchResult = {
  /** The Amazon Resource Name (ARN) of the certificate. */
  certificateArn?: string;
  x509Attributes?: X509Attributes;
  /** Exactly one member is set. */
  certificateMetadata?: CertificateMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateSearchResultSchema: Schema<CertificateSearchResult> =
  s.object<CertificateSearchResult>(
    {
      certificateArn: s.optional(s.string()),
      x509Attributes: s.optional(s.lazy(() => x509AttributesSchema)),
      certificateMetadata: s.optional(s.lazy(() => certificateMetadataSchema)),
      _keysMap: {
        certificateArn: "CertificateArn",
        x509Attributes: "X509Attributes",
        certificateMetadata: "CertificateMetadata",
      },
    },
    { additionalProperties: s.json() },
  );
