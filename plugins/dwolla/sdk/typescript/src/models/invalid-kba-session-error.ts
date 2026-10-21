import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidKbaSessionError = {
  code: string;
  message: string;
};

export const invalidKbaSessionErrorSchema: Schema<InvalidKbaSessionError> = s.object<InvalidKbaSessionError>({
  code: s.string(),
  message: s.string(),
});
