import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Success response for custom metadata operations */
export type SuccessResponse = {
  /** Indicates if the operation was successful @default true */
  success?: boolean;
};

export const successResponseSchema: Schema<SuccessResponse> = s.object<SuccessResponse>({
  success: s.defaulted(s.boolean(), true),
});
