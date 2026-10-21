import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExpiredKbaSessionError = {
  code: string;
  message: string;
};

export const expiredKbaSessionErrorSchema: Schema<ExpiredKbaSessionError> = s.object<ExpiredKbaSessionError>({
  code: s.string(),
  message: s.string(),
});
