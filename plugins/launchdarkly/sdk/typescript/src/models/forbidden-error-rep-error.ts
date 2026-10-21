import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForbiddenErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const forbiddenErrorRepErrorSchema: Schema<ForbiddenErrorRepError> = s.object<ForbiddenErrorRepError>({
  code: s.string(),
  message: s.string(),
});
