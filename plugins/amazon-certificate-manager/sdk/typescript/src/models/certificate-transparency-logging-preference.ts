import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This parameter has been deprecated. Certificate transparency logging opt-out is no longer
 * available. All public certificates are recorded in a certificate transparency log.
 */
export const CertificateTransparencyLoggingPreference = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type CertificateTransparencyLoggingPreference =
  | (typeof CertificateTransparencyLoggingPreference)[keyof typeof CertificateTransparencyLoggingPreference]
  | (string & {});

export const certificateTransparencyLoggingPreferenceSchema: EnumSchema<CertificateTransparencyLoggingPreference> =
  s.enumOf<CertificateTransparencyLoggingPreference>(CertificateTransparencyLoggingPreference);
