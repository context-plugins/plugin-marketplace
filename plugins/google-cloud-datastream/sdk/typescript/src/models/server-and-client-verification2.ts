import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If this field is set, the communication will be encrypted with TLS encryption and both the server
 * identity and the client identity will be authenticated.
 */
export type ServerAndClientVerification2 = {
  /**
   * Required. Input only. PEM-encoded certificate used by the source database to authenticate the
   * client identity (i.e., the Datastream's identity). This certificate is signed by either a root
   * certificate trusted by the server or one or more intermediate certificates (which is stored
   * with the leaf certificate) to link the this certificate to the trusted root certificate.
   */
  clientCertificate?: string;
  /**
   * Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If
   * this field is not provided, the hostname in the server certificate is not validated.
   */
  serverCertificateHostname?: string;
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
  /**
   * Optional. Input only. PEM-encoded private key associated with the client certificate. This
   * value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate
   * the client's identity, i.e. identity of the Datastream.
   */
  clientKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serverAndClientVerification2Schema: Schema<ServerAndClientVerification2> =
  s.object<ServerAndClientVerification2>(
    {
      clientCertificate: s.optional(s.string()),
      serverCertificateHostname: s.optional(s.string()),
      caCertificate: s.optional(s.string()),
      clientKey: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
