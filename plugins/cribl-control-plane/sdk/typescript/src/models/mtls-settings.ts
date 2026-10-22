import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maximumTlsVersion4Schema, type MaximumTlsVersion4 } from "./maximum-tls-version4.js";
import { minimumTlsVersion4Schema, type MinimumTlsVersion4 } from "./minimum-tls-version4.js";

/** mTLS settings */
export type MTlsSettings = {
  /** Enable TLS */
  disabled?: boolean;
  /** Required for WEF certificate authentication */
  rejectUnauthorized?: boolean;
  /** Required for WEF certificate authentication */
  requestCert?: boolean;
  /** Name of the predefined certificate */
  certificateName?: string;
  /** Path on server containing the private key to use. PEM format. Can reference $ENV_VARS. */
  privKeyPath: string;
  /** Passphrase to use to decrypt private key */
  passphrase?: string;
  /** Path on server containing certificates to use. PEM format. Can reference $ENV_VARS. */
  certPath: string;
  /**
   * Server path containing CA certificates (in PEM format) to use. Can reference $ENV_VARS. If
   * multiple certificates are present in a .pem, each must directly certify the one preceding it.
   */
  caPath: string;
  /** Regex matching allowable common names in peer certificates' subject attribute */
  commonNameRegex?: string;
  /** Minimum TLS version */
  minVersion?: MinimumTlsVersion4;
  /** Maximum TLS version */
  maxVersion?: MaximumTlsVersion4;
  /** Enable OCSP check of certificate */
  ocspCheck?: boolean;
  /**
   * If enabled, checks will fail on any OCSP error. Otherwise, checks will fail only when a
   * certificate is revoked, ignoring other errors.
   */
  ocspCheckFailClose?: boolean;
};

export const mTlsSettingsSchema: Schema<MTlsSettings> = s.object<MTlsSettings>({
  disabled: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  requestCert: s.optional(s.boolean()),
  certificateName: s.optional(s.string()),
  privKeyPath: s.string(),
  passphrase: s.optional(s.string()),
  certPath: s.string(),
  caPath: s.string(),
  commonNameRegex: s.optional(s.string()),
  minVersion: s.optional(s.lazy(() => minimumTlsVersion4Schema)),
  maxVersion: s.optional(s.lazy(() => maximumTlsVersion4Schema)),
  ocspCheck: s.optional(s.boolean()),
  ocspCheckFailClose: s.optional(s.boolean()),
});
