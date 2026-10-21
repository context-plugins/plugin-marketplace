import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TooManyRequestsErrorError = {
  code: string;
  message: string;
};

export const tooManyRequestsErrorErrorSchema: Schema<TooManyRequestsErrorError> =
  s.object<TooManyRequestsErrorError>({
    code: s.string(),
    message: s.string(),
  });
