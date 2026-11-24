import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedupeSessionInvalidError = {
  code: string;
  message: string;
};

export const dedupeSessionInvalidErrorSchema: Schema<DedupeSessionInvalidError> =
  s.object<DedupeSessionInvalidError>({
    code: s.string(),
    message: s.string(),
  });
