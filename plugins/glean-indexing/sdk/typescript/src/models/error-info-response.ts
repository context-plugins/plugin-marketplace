import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response for custom metadata operations */
export type ErrorInfoResponse = {
  /** Error message describing what went wrong */
  error: string;
  /** Additional details about the error */
  message?: string;
};

export const errorInfoResponseSchema: Schema<ErrorInfoResponse> = s.object<ErrorInfoResponse>({
  error: s.string(),
  message: s.optional(s.string()),
});
