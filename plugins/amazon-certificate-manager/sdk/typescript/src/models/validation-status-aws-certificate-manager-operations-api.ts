import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting
 * for validation to complete. SUCCESS – Validation completed successfully. FAILED – Validation
 * failed.
 */
export const ValidationStatusAwsCertificateManagerOperationsApi = {
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type ValidationStatusAwsCertificateManagerOperationsApi =
  | (typeof ValidationStatusAwsCertificateManagerOperationsApi)[keyof typeof ValidationStatusAwsCertificateManagerOperationsApi]
  | (string & {});

export const validationStatusAwsCertificateManagerOperationsApiSchema: EnumSchema<ValidationStatusAwsCertificateManagerOperationsApi> =
  s.enumOf<ValidationStatusAwsCertificateManagerOperationsApi>(
    ValidationStatusAwsCertificateManagerOperationsApi,
  );
