import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for Microsoft Graph OAuth authentication. */
export type CertOptions = {
  /** The name of a predefined certificate */
  certificateName?: string;
  /** Path to the private key (PEM format). Can reference $ENV_VARS. */
  privKeyPath: string;
  /** Passphrase to decrypt the private key */
  passphrase?: string;
  /** Path to the certificate (PEM format). Can reference $ENV_VARS. */
  certPath: string;
};

export const certOptionsSchema: Schema<CertOptions> = s.object<CertOptions>({
  certificateName: s.optional(s.string()),
  privKeyPath: s.string(),
  passphrase: s.optional(s.string()),
  certPath: s.string(),
});
