import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SSL configuration for the MySQL connection. */
export type MysqlSslConfig1 = {
  /**
   * Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this
   * field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
   */
  clientKey?: string;
  /**
   * Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate
   * against the source database server. If this field is used then the 'client_key' and the
   * 'ca_certificate' fields are mandatory.
   */
  clientCertificate?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /**
   * Input only. PEM-encoded certificate of the CA that signed the source database server's
   * certificate.
   */
  caCertificate?: string;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlSslConfig1Schema: Schema<MysqlSslConfig1> = s.object<MysqlSslConfig1>(
  {
    clientKey: s.optional(s.string()),
    clientCertificate: s.optional(s.string()),
    clientCertificateSet: s.optional(s.boolean()),
    caCertificateSet: s.optional(s.boolean()),
    caCertificate: s.optional(s.string()),
    clientKeySet: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
