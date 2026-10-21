import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusConflictErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const statusConflictErrorRepErrorSchema: Schema<StatusConflictErrorRepError> =
  s.object<StatusConflictErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
