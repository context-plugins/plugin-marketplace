import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failureReasonRepSchema, type FailureReasonRep } from "./failure-reason-rep.js";

export type ValidationFailedErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
  /** List of validation errors */
  errors: FailureReasonRep[];
};

export const validationFailedErrorRepErrorSchema: Schema<ValidationFailedErrorRepError> =
  s.object<ValidationFailedErrorRepError>({
    code: s.string(),
    message: s.string(),
    errors: s.array(s.lazy(() => failureReasonRepSchema)),
  });
