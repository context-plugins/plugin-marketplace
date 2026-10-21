import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RateLimitedErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const rateLimitedErrorRepSchema: Schema<RateLimitedErrorRep> = s.object<RateLimitedErrorRep>({
  code: s.string(),
  message: s.string(),
});
