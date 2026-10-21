import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusServiceUnavailableError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const statusServiceUnavailableErrorSchema: Schema<StatusServiceUnavailableError> =
  s.object<StatusServiceUnavailableError>({
    code: s.string(),
    message: s.string(),
  });
