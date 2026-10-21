import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestrictedModelError = {
  key: string;
  message: string;
  code: number;
};

export const restrictedModelErrorSchema: Schema<RestrictedModelError> = s.object<RestrictedModelError>({
  key: s.string(),
  message: s.string(),
  code: s.int(),
});
