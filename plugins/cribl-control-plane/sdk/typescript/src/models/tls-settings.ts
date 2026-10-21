import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TlsSettings = {
  /**
   * Cipher suite list to use for TLS connections. <code>DEFAULT</code> means the system default.
   */
  defaultCipherList: string;
  /** ECDH curve name for TLS key exchange. Use <code>auto</code> to let Node.js choose. */
  defaultEcdhCurve: string;
  /** Maximum TLS protocol version to accept. */
  maxVersion: string;
  /** Minimum TLS protocol version to accept. */
  minVersion: string;
  /**
   * If <code>true</code>, reject TLS certificates that cannot be verified against a valid
   * Certificate Authority. Otherwise, <code>false</code>.
   */
  rejectUnauthorized: boolean;
};

export const tlsSettingsSchema: Schema<TlsSettings> = s.object<TlsSettings>({
  defaultCipherList: s.string(),
  defaultEcdhCurve: s.string(),
  maxVersion: s.string(),
  minVersion: s.string(),
  rejectUnauthorized: s.boolean(),
});
