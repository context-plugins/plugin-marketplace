import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponse = {
  /** Error message describing what went wrong */
  detail: string;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  detail: s.string(),
});
