import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Message represents the option where Datastream will enforce the encryption and authenticate the
 * server identity. ca_certificate must be set if user selects this option.
 */
export type ServerVerification = {
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
  /**
   * Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If
   * this field is not provided, the hostname in the server certificate is not validated.
   */
  serverCertificateHostname?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serverVerificationSchema: Schema<ServerVerification> = s.object<ServerVerification>(
  {
    caCertificate: s.optional(s.string()),
    serverCertificateHostname: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
