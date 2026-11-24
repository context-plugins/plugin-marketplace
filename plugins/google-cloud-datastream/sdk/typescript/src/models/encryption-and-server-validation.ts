import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Message to represent the option where Datastream will enforce encryption and authenticate server
 * identity. ca_certificate must be set if user selects this option.
 */
export type EncryptionAndServerValidation = {
  /**
   * Optional. Input only. PEM-encoded certificate of the CA that signed the source database
   * server's certificate.
   */
  caCertificate?: string;
  /**
   * Optional. The hostname mentioned in the Subject or SAN extension of the server certificate.
   * This field is used for bypassing the hostname validation while verifying server certificate.
   * This is required for scenarios where the host name that datastream connects to is different
   * from the certificate's subject. This specifically happens for private connectivity. It could
   * also happen when the customer provides a public IP in connection profile but the same is not
   * present in the server certificate.
   */
  serverCertificateHostname?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionAndServerValidationSchema: Schema<EncryptionAndServerValidation> =
  s.object<EncryptionAndServerValidation>(
    {
      caCertificate: s.optional(s.string()),
      serverCertificateHostname: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
