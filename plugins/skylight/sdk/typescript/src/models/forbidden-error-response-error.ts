import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Returned when the request cannot be processed due to authentication or authorization issues */
export type ForbiddenErrorResponseError = {
  /** Error message for forbidden access @default "Access forbidden" */
  detail?: string;
};

export const forbiddenErrorResponseErrorSchema: Schema<ForbiddenErrorResponseError> =
  s.object<ForbiddenErrorResponseError>({
    detail: s.defaulted(s.string(), "Access forbidden"),
  });
