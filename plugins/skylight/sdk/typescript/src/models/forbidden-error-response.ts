import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Returned when the request cannot be processed due to authentication or authorization issues */
export type ForbiddenErrorResponse = {
  /** Error message for forbidden access @default "Access forbidden" */
  detail?: string;
};

export const forbiddenErrorResponseSchema: Schema<ForbiddenErrorResponse> = s.object<ForbiddenErrorResponse>({
  detail: s.defaulted(s.string(), "Access forbidden"),
});
