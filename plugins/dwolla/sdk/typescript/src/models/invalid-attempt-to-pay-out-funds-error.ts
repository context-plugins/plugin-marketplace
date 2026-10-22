import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidAttemptToPayOutFundsError = {
  code: string;
  message: string;
};

export const invalidAttemptToPayOutFundsErrorSchema: Schema<InvalidAttemptToPayOutFundsError> =
  s.object<InvalidAttemptToPayOutFundsError>({
    code: s.string(),
    message: s.string(),
  });
