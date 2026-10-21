import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** TLS configuration for the API server. */
export type Ssl = {
  /**
   * Filesystem path to the PEM-encoded Certificate Authority (CA) certificate for client
   * authentication.
   */
  caPath?: string;
  /** Filesystem path to the PEM-encoded TLS certificate. */
  certPath?: string;
  /** Name of a predefined Certificate stored in Cribl. */
  certificateName?: string;
  /** If <code>true</code>, TLS is disabled for the API server. Otherwise, <code>false</code>. */
  disabled?: boolean;
  /** Passphrase to decrypt the TLS private key, if encrypted. */
  passphrase?: string;
  /** Filesystem path to the PEM-encoded TLS private key. */
  privKeyPath?: string;
};

export const sslSchema: Schema<Ssl> = s.object<Ssl>({
  caPath: s.optional(s.string()),
  certPath: s.optional(s.string()),
  certificateName: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  passphrase: s.optional(s.string()),
  privKeyPath: s.optional(s.string()),
});
