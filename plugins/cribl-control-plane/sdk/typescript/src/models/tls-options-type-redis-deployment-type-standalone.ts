import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maximumTlsVersionSchema, type MaximumTlsVersion } from "./maximum-tls-version.js";
import { minimumTlsVersionSchema, type MinimumTlsVersion } from "./minimum-tls-version.js";

/** TLS settings for encrypting the connection to Redis. */
export type TlsOptionsTypeRedisDeploymentTypeStandalone = {
  /**
   * Reject certificates that are not authorized by a CA in the 'CA certificate path', or by another
   * trusted CA (such as the system's CA)
   */
  rejectUnauthorized?: boolean;
  /**
   * Server name for the SNI (Server Name Indication) TLS extension. Must be a host name, not an IP
   * address.
   */
  servername?: string;
  /** The name of the predefined certificate */
  certificateName?: string;
  /**
   * Path on client in which to find CA certificates to verify the server's certificate. PEM format.
   * Can reference $ENV_VARS.
   */
  caPath?: string;
  /**
   * Path on client in which to find the private key to use. PEM format. Can reference $ENV_VARS.
   */
  privKeyPath?: string;
  /** Path on client in which to find certificates to use. PEM format. Can reference $ENV_VARS. */
  certPath?: string;
  /** Passphrase to use to decrypt private key */
  passphrase?: string;
  /** Minimum TLS version to use when connecting */
  minVersion?: MinimumTlsVersion;
  /** Maximum TLS version to use when connecting */
  maxVersion?: MaximumTlsVersion;
};

export const tlsOptionsTypeRedisDeploymentTypeStandaloneSchema: Schema<TlsOptionsTypeRedisDeploymentTypeStandalone> =
  s.object<TlsOptionsTypeRedisDeploymentTypeStandalone>({
    rejectUnauthorized: s.optional(s.boolean()),
    servername: s.optional(s.string()),
    certificateName: s.optional(s.string()),
    caPath: s.optional(s.string()),
    privKeyPath: s.optional(s.string()),
    certPath: s.optional(s.string()),
    passphrase: s.optional(s.string()),
    minVersion: s.optional(s.lazy(() => minimumTlsVersionSchema)),
    maxVersion: s.optional(s.lazy(() => maximumTlsVersionSchema)),
  });
