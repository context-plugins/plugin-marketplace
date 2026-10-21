import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchFailedErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const patchFailedErrorRepSchema: Schema<PatchFailedErrorRep> = s.object<PatchFailedErrorRep>({
  code: s.string(),
  message: s.string(),
});
