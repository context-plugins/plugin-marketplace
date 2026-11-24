import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExportCertificateResponse = {
  /** The base64 PEM-encoded certificate. */
  certificate?: string;
  /**
   * The base64 PEM-encoded certificate chain. This does not include the certificate that you are
   * exporting.
   */
  certificateChain?: string;
  /**
   * The encrypted private key associated with the public key in the certificate. The key is output
   * in PKCS #8 format and is base64 PEM-encoded.
   */
  privateKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportCertificateResponseSchema: Schema<ExportCertificateResponse> =
  s.object<ExportCertificateResponse>(
    {
      certificate: s.optional(s.string()),
      certificateChain: s.optional(s.string()),
      privateKey: s.optional(s.string()),
      _keysMap: {
        certificate: "Certificate",
        certificateChain: "CertificateChain",
        privateKey: "PrivateKey",
      },
    },
    { additionalProperties: s.json() },
  );
