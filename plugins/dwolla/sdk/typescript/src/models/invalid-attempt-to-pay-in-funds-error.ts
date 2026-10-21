import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidAttemptToPayInFundsError = {
  code: string;
  message: string;
};

export const invalidAttemptToPayInFundsErrorSchema: Schema<InvalidAttemptToPayInFundsError> =
  s.object<InvalidAttemptToPayInFundsError>({
    code: s.string(),
    message: s.string(),
  });
