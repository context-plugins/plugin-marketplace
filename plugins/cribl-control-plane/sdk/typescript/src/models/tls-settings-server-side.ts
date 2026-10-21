import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maximumTlsVersion10Schema, type MaximumTlsVersion10 } from "./maximum-tls-version10.js";
import { minimumTlsVersion10Schema, type MinimumTlsVersion10 } from "./minimum-tls-version10.js";

/** TLS settings (server side) */
export type TlsSettingsServerSide = {
  /** If true, TLS is disabled on this connection. */
  disabled?: boolean;
  /**
   * Require clients to present their certificates. Used to perform client authentication using SSL
   * certs.
   */
  requestCert?: boolean;
  /** Path on server containing CA certificates to use. PEM format. Can reference $ENV_VARS. */
  caPath?: string;
  /**
   * Reject certificates not authorized by a CA in the CA certificate path or by another trusted CA
   * (such as the system's)
   */
  rejectUnauthorized?: boolean;
  /** Regex matching allowable common names in peer certificates' subject attribute */
  commonNameRegex?: string;
  /** The name of the predefined certificate */
  certificateName?: string;
  /** Path on server containing the private key to use. PEM format. Can reference $ENV_VARS. */
  privKeyPath?: string;
  /** Passphrase to use to decrypt private key */
  passphrase?: string;
  /** Path on server containing certificates to use. PEM format. Can reference $ENV_VARS. */
  certPath?: string;
  /** Minimum TLS version to accept from clients. */
  minVersion?: MinimumTlsVersion10;
  /** Maximum TLS version to accept from clients. */
  maxVersion?: MaximumTlsVersion10;
};

export const tlsSettingsServerSideSchema: Schema<TlsSettingsServerSide> = s.object<TlsSettingsServerSide>({
  disabled: s.optional(s.boolean()),
  requestCert: s.optional(s.boolean()),
  caPath: s.optional(s.string()),
  rejectUnauthorized: s.optional(s.boolean()),
  commonNameRegex: s.optional(s.string()),
  certificateName: s.optional(s.string()),
  privKeyPath: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  certPath: s.optional(s.string()),
  minVersion: s.optional(s.lazy(() => minimumTlsVersion10Schema)),
  maxVersion: s.optional(s.lazy(() => maximumTlsVersion10Schema)),
});
