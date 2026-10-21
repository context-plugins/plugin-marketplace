import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Standard error response containing details about the error */
export type ErrorResponse1Error = {
  /** Error message describing what went wrong */
  detail: string;
};

export const errorResponse1ErrorSchema: Schema<ErrorResponse1Error> = s.object<ErrorResponse1Error>({
  detail: s.string(),
});
