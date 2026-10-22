import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotFoundErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const notFoundErrorRepErrorSchema: Schema<NotFoundErrorRepError> = s.object<NotFoundErrorRepError>({
  code: s.string(),
  message: s.string(),
});
