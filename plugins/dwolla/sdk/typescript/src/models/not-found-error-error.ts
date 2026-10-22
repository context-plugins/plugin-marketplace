import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response schema for 404 NotFound */
export type NotFoundErrorError = {
  code: string;
  message: string;
};

export const notFoundErrorErrorSchema: Schema<NotFoundErrorError> = s.object<NotFoundErrorError>({
  code: s.string(),
  message: s.string(),
});
