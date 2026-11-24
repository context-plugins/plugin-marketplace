import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The domain validation method for the certificate. To migrate from email to DNS validation,
 * specify DNS.
 */
export const ValidationMethodAwsCertificateManagerOperationsApi = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethodAwsCertificateManagerOperationsApi =
  | (typeof ValidationMethodAwsCertificateManagerOperationsApi)[keyof typeof ValidationMethodAwsCertificateManagerOperationsApi]
  | (string & {});

export const validationMethodAwsCertificateManagerOperationsApiSchema: EnumSchema<ValidationMethodAwsCertificateManagerOperationsApi> =
  s.enumOf<ValidationMethodAwsCertificateManagerOperationsApi>(
    ValidationMethodAwsCertificateManagerOperationsApi,
  );
