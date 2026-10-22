import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RateLimitedErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const rateLimitedErrorRepErrorSchema: Schema<RateLimitedErrorRepError> =
  s.object<RateLimitedErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
