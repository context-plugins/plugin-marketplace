import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for Microsoft OAuth authentication. */
export type CertOptionsType = {
  /** The name of the predefined certificate. */
  certificateName?: string;
  /** Path to the private key to use. Key should be in PEM format. Can reference $ENV_VARS. */
  privKeyPath: string;
  /** Passphrase to use to decrypt the private key. */
  passphrase?: string;
  /**
   * Path to the certificate to use. Certificate should be in PEM format. Can reference $ENV_VARS.
   */
  certPath: string;
};

export const certOptionsTypeSchema: Schema<CertOptionsType> = s.object<CertOptionsType>({
  certificateName: s.optional(s.string()),
  privKeyPath: s.string(),
  passphrase: s.optional(s.string()),
  certPath: s.string(),
});
