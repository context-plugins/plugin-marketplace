import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { validationConfigurationSchema, type ValidationConfiguration } from "./validation-configuration.js";

export type DomainValidationSummary = {
  /**
   * The fully qualified domain name (FQDN) in the certificate for which this validation summary
   * applies.
   */
  domainName: string;
  activeValidationConfiguration?: ValidationConfiguration;
  requestedValidationConfiguration?: ValidationConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainValidationSummarySchema: Schema<DomainValidationSummary> =
  s.object<DomainValidationSummary>(
    {
      domainName: s.string(),
      activeValidationConfiguration: s.optional(s.lazy(() => validationConfigurationSchema)),
      requestedValidationConfiguration: s.optional(s.lazy(() => validationConfigurationSchema)),
      _keysMap: {
        domainName: "DomainName",
        activeValidationConfiguration: "ActiveValidationConfiguration",
        requestedValidationConfiguration: "RequestedValidationConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
