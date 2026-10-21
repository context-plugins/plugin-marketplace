import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error3 = {
  /** Machine-readable code (e.g. `HTTP_UNAUTHORIZED`, `HTTP_FORBIDDEN`). */
  code: string;
  message: string;
  /** Optional; may appear in non-production for some errors. */
  metadata?: Record<string, unknown>;
};

export const error3Schema: Schema<Error3> = s.object<Error3>({
  code: s.string(),
  message: s.string(),
  metadata: s.optional(s.record(s.string(), s.unknown())),
});
