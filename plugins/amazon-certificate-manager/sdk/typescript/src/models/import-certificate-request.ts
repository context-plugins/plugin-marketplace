import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ImportCertificateRequest = {
  /**
   * The Amazon Resource Name (ARN) of an imported certificate to replace. To import a new
   * certificate, omit this field.
   */
  certificateArn?: string;
  /** The certificate to import. */
  certificate: string;
  /** The private key that matches the public key in the certificate. */
  privateKey: string;
  /** The PEM encoded certificate chain. */
  certificateChain?: string;
  /**
   * One or more resource tags to associate with the imported certificate. Note: You cannot apply
   * tags when reimporting a certificate.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importCertificateRequestSchema: Schema<ImportCertificateRequest> =
  s.object<ImportCertificateRequest>(
    {
      certificateArn: s.optional(s.string()),
      certificate: s.string(),
      privateKey: s.string(),
      certificateChain: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        certificateArn: "CertificateArn",
        certificate: "Certificate",
        privateKey: "PrivateKey",
        certificateChain: "CertificateChain",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
