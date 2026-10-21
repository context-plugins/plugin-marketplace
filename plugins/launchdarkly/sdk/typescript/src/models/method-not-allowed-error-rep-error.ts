import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MethodNotAllowedErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const methodNotAllowedErrorRepErrorSchema: Schema<MethodNotAllowedErrorRepError> =
  s.object<MethodNotAllowedErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
