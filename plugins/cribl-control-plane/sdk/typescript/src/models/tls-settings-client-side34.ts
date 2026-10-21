import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maximumTlsVersion9Schema, type MaximumTlsVersion9 } from "./maximum-tls-version9.js";
import { minimumTlsVersion9Schema, type MinimumTlsVersion9 } from "./minimum-tls-version9.js";

/** TLS settings (client side) */
export type TlsSettingsClientSide34 = {
  /** Whether TLS is disabled for this connection. */
  disabled?: boolean;
  /**
   * Server name for the SNI (Server Name Indication) TLS extension. It must be a host name, and not
   * an IP address.
   */
  servername?: string;
  /** The name of the predefined certificate */
  certificateName?: string;
  /**
   * Path on client in which to find CA certificates to verify the server's cert. PEM format. Can
   * reference $ENV_VARS.
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
  /** Minimum TLS version to use for the connection. */
  minVersion?: MinimumTlsVersion9;
  /** Maximum TLS version to use for the connection. */
  maxVersion?: MaximumTlsVersion9;
};

export const tlsSettingsClientSide34Schema: Schema<TlsSettingsClientSide34> =
  s.object<TlsSettingsClientSide34>({
    disabled: s.optional(s.boolean()),
    servername: s.optional(s.string()),
    certificateName: s.optional(s.string()),
    caPath: s.optional(s.string()),
    privKeyPath: s.optional(s.string()),
    certPath: s.optional(s.string()),
    passphrase: s.optional(s.string()),
    minVersion: s.optional(s.lazy(() => minimumTlsVersion9Schema)),
    maxVersion: s.optional(s.lazy(() => maximumTlsVersion9Schema)),
  });
