import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateTransparencyLoggingPreferenceSchema,
  type CertificateTransparencyLoggingPreference,
} from "./certificate-transparency-logging-preference.js";
import { exportSchema, type Export } from "./export.js";
import { validationMethod3Schema, type ValidationMethod3 } from "./validation-method3.js";

export type CertificateOptions = {
  /**
   * This parameter has been deprecated. Certificate transparency logging opt-out is no longer
   * available. All public certificates are recorded in a certificate transparency log.
   */
  certificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference;
  /**
   * You can opt in to allow the export of your certificates by specifying ENABLED. You cannot
   * update the value of Export after the the certificate is created.
   */
  export?: Export;
  /**
   * The domain validation method for the certificate. To migrate from email to DNS validation,
   * specify DNS.
   */
  validationMethod?: ValidationMethod3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateOptionsSchema: Schema<CertificateOptions> = s.object<CertificateOptions>(
  {
    certificateTransparencyLoggingPreference: s.optional(
      s.lazy(() => certificateTransparencyLoggingPreferenceSchema),
    ),
    export: s.optional(s.lazy(() => exportSchema)),
    validationMethod: s.optional(s.lazy(() => validationMethod3Schema)),
    _keysMap: {
      certificateTransparencyLoggingPreference: "CertificateTransparencyLoggingPreference",
      export: "Export",
      validationMethod: "ValidationMethod",
    },
  },
  { additionalProperties: s.json() },
);
