import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExportCertificateRequest = {
  /**
   * An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:
   * arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012
   */
  certificateArn: string;
  /**
   * Passphrase to associate with the encrypted exported private key. When creating your passphrase,
   * you can use any ASCII character except #, $, or %. If you want to later decrypt the private
   * key, you must have the passphrase. You can use the following OpenSSL command to decrypt a
   * private key. After entering the command, you are prompted for the passphrase. openssl rsa -in
   * encrypted_key.pem -out decrypted_key.pem
   */
  passphrase: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportCertificateRequestSchema: Schema<ExportCertificateRequest> =
  s.object<ExportCertificateRequest>(
    {
      certificateArn: s.string(),
      passphrase: s.string(),
      _keysMap: {
        certificateArn: "CertificateArn",
        passphrase: "Passphrase",
      },
    },
    { additionalProperties: s.json() },
  );
