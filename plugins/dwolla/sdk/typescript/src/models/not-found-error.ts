import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response schema for 404 NotFound */
export type NotFoundError = {
  code: string;
  message: string;
};

export const notFoundErrorSchema: Schema<NotFoundError> = s.object<NotFoundError>({
  code: s.string(),
  message: s.string(),
});
