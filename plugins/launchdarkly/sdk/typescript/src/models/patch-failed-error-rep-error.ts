import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchFailedErrorRepError = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const patchFailedErrorRepErrorSchema: Schema<PatchFailedErrorRepError> =
  s.object<PatchFailedErrorRepError>({
    code: s.string(),
    message: s.string(),
  });
