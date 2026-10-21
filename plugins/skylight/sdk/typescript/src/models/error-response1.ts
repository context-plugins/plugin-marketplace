import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Standard error response containing details about the error */
export type ErrorResponse1 = {
  /** Error message describing what went wrong */
  detail: string;
};

export const errorResponse1Schema: Schema<ErrorResponse1> = s.object<ErrorResponse1>({
  detail: s.string(),
});
