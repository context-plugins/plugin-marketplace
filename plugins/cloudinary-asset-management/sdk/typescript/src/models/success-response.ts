import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SuccessResponse = {
  /** Whether the operation was successful. */
  success: boolean;
};

export const successResponseSchema: Schema<SuccessResponse> = s.object<SuccessResponse>({
  success: s.boolean(),
});
