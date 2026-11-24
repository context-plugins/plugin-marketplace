import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The validation method for this configuration. Valid values: DNS – Validation using a CNAME record
 * added to your DNS configuration. EMAIL – Validation using an approval email sent to domain
 * contacts. HTTP – Validation using an HTTP resource placed on your web server.
 */
export const ValidationMethod1AwsCertificateManagerOperationsApi = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethod1AwsCertificateManagerOperationsApi =
  | (typeof ValidationMethod1AwsCertificateManagerOperationsApi)[keyof typeof ValidationMethod1AwsCertificateManagerOperationsApi]
  | (string & {});

export const validationMethod1AwsCertificateManagerOperationsApiSchema: EnumSchema<ValidationMethod1AwsCertificateManagerOperationsApi> =
  s.enumOf<ValidationMethod1AwsCertificateManagerOperationsApi>(
    ValidationMethod1AwsCertificateManagerOperationsApi,
  );
