import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** TLS settings (client side) */
export type TlsSettingsClientSide = {
  /** Disabled */
  disabled: boolean;
  /**
   * Reject certificates that are not authorized by a CA in the CA certificate path, or by another
   * trusted CA (such as the system's)
   */
  rejectUnauthorized?: boolean;
};

export const tlsSettingsClientSideSchema: Schema<TlsSettingsClientSide> = s.object<TlsSettingsClientSide>({
  disabled: s.boolean(),
  rejectUnauthorized: s.optional(s.boolean()),
});
