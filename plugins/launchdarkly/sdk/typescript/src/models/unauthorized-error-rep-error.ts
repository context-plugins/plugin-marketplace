import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnauthorizedErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const unauthorizedErrorRepErrorSchema: Schema<UnauthorizedErrorRepError> =
  s.object<UnauthorizedErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
