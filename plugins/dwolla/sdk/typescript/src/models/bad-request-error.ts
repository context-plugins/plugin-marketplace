import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response schema for 400 Bad Request */
export type BadRequestError = {
  code: string;
  message: string;
};

export const badRequestErrorSchema: Schema<BadRequestError> = s.object<BadRequestError>({
  code: s.string(),
  message: s.string(),
});
