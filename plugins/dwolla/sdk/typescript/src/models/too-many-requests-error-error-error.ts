import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TooManyRequestsErrorErrorError = {
  code: string;
  message: string;
};

export const tooManyRequestsErrorErrorErrorSchema: Schema<TooManyRequestsErrorErrorError> =
  s.object<TooManyRequestsErrorErrorError>({
    code: s.string(),
    message: s.string(),
  });
