import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { secureVersion1Schema, type SecureVersion1 } from "./secure-version1.js";
import { secureVersion2Schema, type SecureVersion2 } from "./secure-version2.js";

/** TLS client connection settings. */
export type TlsClientParams = {
  /** Path to the Certificate Authority (CA) certificate file in PEM format. */
  caPath?: string;
  /** Path to the client certificate file in PEM format. */
  certPath?: string;
  /** Name of a certificate stored in Cribl. */
  certificateName?: string;
  /** If <code>true</code>, TLS is disabled for the connection. */
  disabled: boolean;
  /** Maximum TLS version to allow for the connection. */
  maxVersion?: SecureVersion1;
  /** Minimum TLS version to allow for the connection. */
  minVersion?: SecureVersion2;
  /** Passphrase for the private key. */
  passphrase?: string;
  /** Path to the private key file in PEM format. */
  privKeyPath?: string;
  /** If <code>true</code>, reject connections to servers with unverified TLS certificates. */
  rejectUnauthorized?: boolean;
  /** Server name for TLS Server Name Indication (SNI) extension. */
  servername?: string;
};

export const tlsClientParamsSchema: Schema<TlsClientParams> = s.object<TlsClientParams>({
  caPath: s.optional(s.string()),
  certPath: s.optional(s.string()),
  certificateName: s.optional(s.string()),
  disabled: s.boolean(),
  maxVersion: s.optional(s.lazy(() => secureVersion1Schema)),
  minVersion: s.optional(s.lazy(() => secureVersion2Schema)),
  passphrase: s.optional(s.string()),
  privKeyPath: s.optional(s.string()),
  rejectUnauthorized: s.optional(s.boolean()),
  servername: s.optional(s.string()),
});
