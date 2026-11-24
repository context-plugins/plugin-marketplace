import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainValidationOption = {
  /** A fully qualified domain name (FQDN) in the certificate request. */
  domainName: string;
  /**
   * The domain name that you want ACM to use to send you validation emails. This domain name is the
   * suffix of the email addresses that you want ACM to use. This must be the same as the DomainName
   * value or a superdomain of the DomainName value. For example, if you request a certificate for
   * testing.example.com, you can specify example.com for this value. In that case, ACM sends domain
   * validation emails to the following five addresses: admin@example.com administrator@example.com
   * hostmaster@example.com postmaster@example.com webmaster@example.com
   */
  validationDomain: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainValidationOptionSchema: Schema<DomainValidationOption> = s.object<DomainValidationOption>(
  {
    domainName: s.string(),
    validationDomain: s.string(),
    _keysMap: {
      domainName: "DomainName",
      validationDomain: "ValidationDomain",
    },
  },
  { additionalProperties: s.json() },
);
