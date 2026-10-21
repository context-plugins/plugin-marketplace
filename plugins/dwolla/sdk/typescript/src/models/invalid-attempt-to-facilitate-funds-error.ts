import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidAttemptToFacilitateFundsError = {
  code: string;
  message: string;
};

export const invalidAttemptToFacilitateFundsErrorSchema: Schema<InvalidAttemptToFacilitateFundsError> =
  s.object<InvalidAttemptToFacilitateFundsError>({
    code: s.string(),
    message: s.string(),
  });
