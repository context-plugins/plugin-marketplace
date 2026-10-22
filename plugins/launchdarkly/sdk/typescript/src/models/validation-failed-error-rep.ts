import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failureReasonRepSchema, type FailureReasonRep } from "./failure-reason-rep.js";

export type ValidationFailedErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
  /** List of validation errors */
  errors: FailureReasonRep[];
};

export const validationFailedErrorRepSchema: Schema<ValidationFailedErrorRep> =
  s.object<ValidationFailedErrorRep>({
    code: s.string(),
    message: s.string(),
    errors: s.array(s.lazy(() => failureReasonRepSchema)),
  });
