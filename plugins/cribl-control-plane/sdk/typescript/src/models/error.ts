import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /** Always "error" for API error responses. @default "error" */
  status?: "error";
  /** Human-readable message describing the error. */
  message: string;
  /** Optional structured details about the error (e.g. validation failures). */
  details?: Record<string, unknown>;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  status: s.defaulted(s.literal("error"), "error"),
  message: s.string(),
  details: s.optional(s.record(s.string(), s.unknown())),
});
