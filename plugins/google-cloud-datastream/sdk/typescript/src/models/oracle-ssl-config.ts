import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Oracle SSL configuration information. */
export type OracleSslConfig = {
  /**
   * Output only. Indicates whether the ca_certificate field has been set for this
   * Connection-Profile.
   */
  caCertificateSet?: boolean;
  /**
   * Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to
   * SSL_SERVER_CERT_DN sqlnet parameter. Refer
   * https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7
   * If this field is not provided, the DN matching is not enforced.
   */
  serverCertificateDistinguishedName?: string;
  /**
   * Input only. PEM-encoded certificate of the CA that signed the source database server's
   * certificate.
   */
  caCertificate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleSslConfigSchema: Schema<OracleSslConfig> = s.object<OracleSslConfig>(
  {
    caCertificateSet: s.optional(s.boolean()),
    serverCertificateDistinguishedName: s.optional(s.string()),
    caCertificate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
