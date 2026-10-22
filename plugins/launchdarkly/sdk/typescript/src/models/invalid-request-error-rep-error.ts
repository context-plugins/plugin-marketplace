import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidRequestErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const invalidRequestErrorRepErrorSchema: Schema<InvalidRequestErrorRepError> =
  s.object<InvalidRequestErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
