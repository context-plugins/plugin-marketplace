import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MongoDB SSL configuration information. */
export type MongodbSslConfig = {
  /**
   * Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate
   * against the source database server. If this field is used then the 'client_key' and the
   * 'ca_certificate' fields are mandatory.
   */
  clientCertificate?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /**
   * Optional. Input only. PEM-encoded certificate of the CA that signed the source database
   * server's certificate.
   */
  caCertificate?: string;
  /**
   * Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded
   * private key associated with the Client Certificate. If this field is used then the
   * 'client_certificate' and the 'ca_certificate' fields are mandatory. Mutually exclusive with the
   * `client_key` field.
   */
  secretManagerStoredClientKey?: string;
  /**
   * Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this
   * field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
   */
  clientKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbSslConfigSchema: Schema<MongodbSslConfig> = s.object<MongodbSslConfig>(
  {
    clientCertificate: s.optional(s.string()),
    clientCertificateSet: s.optional(s.boolean()),
    clientKeySet: s.optional(s.boolean()),
    caCertificateSet: s.optional(s.boolean()),
    caCertificate: s.optional(s.string()),
    secretManagerStoredClientKey: s.optional(s.string()),
    clientKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
