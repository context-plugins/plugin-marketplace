import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error4 = {
  /** Error code. */
  code?: string;
  message?: string;
  /** Suggested seconds to wait before retrying. */
  retryAfter?: number | null;
};

export const error4Schema: Schema<Error4> = s.object<Error4>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  retryAfter: s.optionalNullable(s.int()),
});
