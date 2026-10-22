import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response schema for 400 Bad Request */
export type BadRequestErrorError = {
  code: string;
  message: string;
};

export const badRequestErrorErrorSchema: Schema<BadRequestErrorError> = s.object<BadRequestErrorError>({
  code: s.string(),
  message: s.string(),
});
