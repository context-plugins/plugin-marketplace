import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maximumTlsVersion9Schema, type MaximumTlsVersion9 } from "./maximum-tls-version9.js";
import { minimumTlsVersion9Schema, type MinimumTlsVersion9 } from "./minimum-tls-version9.js";

/** TLS settings (client side) */
export type TlsSettingsClientSide35 = {
  /** Whether TLS is disabled for this connection. */
  disabled?: boolean;
  /**
   * Reject certificates that are not authorized by a CA in the CA certificate path, or by another
   * trusted CA (such as the system's). Defaults to Enabled. Overrides the toggle from Advanced
   * Settings, when also present.
   */
  rejectUnauthorized?: boolean;
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

export const tlsSettingsClientSide35Schema: Schema<TlsSettingsClientSide35> =
  s.object<TlsSettingsClientSide35>({
    disabled: s.optional(s.boolean()),
    rejectUnauthorized: s.optional(s.boolean()),
    certificateName: s.optional(s.string()),
    caPath: s.optional(s.string()),
    privKeyPath: s.optional(s.string()),
    certPath: s.optional(s.string()),
    passphrase: s.optional(s.string()),
    minVersion: s.optional(s.lazy(() => minimumTlsVersion9Schema)),
    maxVersion: s.optional(s.lazy(() => maximumTlsVersion9Schema)),
  });
