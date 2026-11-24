import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnprocessableError = {
  message: string;
};

export const unprocessableErrorSchema: Schema<UnprocessableError> = s.object<UnprocessableError>({
  message: s.string(),
});
