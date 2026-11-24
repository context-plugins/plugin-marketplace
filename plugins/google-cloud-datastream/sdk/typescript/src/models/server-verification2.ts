import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If this field is set, the communication will be encrypted with TLS encryption and the server
 * identity will be authenticated.
 */
export type ServerVerification2 = {
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

export const serverVerification2Schema: Schema<ServerVerification2> = s.object<ServerVerification2>(
  {
    caCertificate: s.optional(s.string()),
    serverCertificateHostname: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
