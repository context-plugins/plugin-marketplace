import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { validationChallengeSchema, type ValidationChallenge } from "./validation-challenge.js";
import {
  validationMethod1AwsCertificateManagerOperationsApiSchema,
  type ValidationMethod1AwsCertificateManagerOperationsApi,
} from "./validation-method1-aws-certificate-manager-operations-api.js";
import {
  validationStatusAwsCertificateManagerOperationsApiSchema,
  type ValidationStatusAwsCertificateManagerOperationsApi,
} from "./validation-status-aws-certificate-manager-operations-api.js";

export type ValidationConfiguration = {
  /**
   * The validation method for this configuration. Valid values: DNS – Validation using a CNAME
   * record added to your DNS configuration. EMAIL – Validation using an approval email sent to
   * domain contacts. HTTP – Validation using an HTTP resource placed on your web server.
   */
  validationMethod?: ValidationMethod1AwsCertificateManagerOperationsApi;
  /** Exactly one member is set. */
  validationChallenge?: ValidationChallenge;
  /**
   * The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting
   * for validation to complete. SUCCESS – Validation completed successfully. FAILED – Validation
   * failed.
   */
  validationStatus?: ValidationStatusAwsCertificateManagerOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationConfigurationSchema: Schema<ValidationConfiguration> =
  s.object<ValidationConfiguration>(
    {
      validationMethod: s.optional(s.lazy(() => validationMethod1AwsCertificateManagerOperationsApiSchema)),
      validationChallenge: s.optional(s.lazy(() => validationChallengeSchema)),
      validationStatus: s.optional(s.lazy(() => validationStatusAwsCertificateManagerOperationsApiSchema)),
      _keysMap: {
        validationMethod: "ValidationMethod",
        validationChallenge: "ValidationChallenge",
        validationStatus: "ValidationStatus",
      },
    },
    { additionalProperties: s.json() },
  );
