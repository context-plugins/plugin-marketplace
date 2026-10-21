import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response schema for 403 Forbidden */
export type ForbiddenErrorError = {
  code: string;
  message: string;
};

export const forbiddenErrorErrorSchema: Schema<ForbiddenErrorError> = s.object<ForbiddenErrorError>({
  code: s.string(),
  message: s.string(),
});
