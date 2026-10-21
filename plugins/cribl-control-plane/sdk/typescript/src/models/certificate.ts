import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for OAuth authentication. */
export type Certificate = {
  /** The certificate you registered as credentials for your app in the Azure portal */
  certificateName: string;
  /** Path on server containing certificates to use. PEM format. Can reference $ENV_VARS. */
  certPath: string;
  /** Path on server containing the private key to use. PEM format. Can reference $ENV_VARS. */
  privKeyPath: string;
  /** Passphrase to use to decrypt private key */
  passphrase?: string;
};

export const certificateSchema: Schema<Certificate> = s.object<Certificate>({
  certificateName: s.string(),
  certPath: s.string(),
  privKeyPath: s.string(),
  passphrase: s.optional(s.string()),
});
