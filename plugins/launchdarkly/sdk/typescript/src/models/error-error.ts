import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorError = {
  message: string;
  code: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  message: s.string(),
  code: s.string(),
});
