import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForbiddenErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const forbiddenErrorRepSchema: Schema<ForbiddenErrorRep> = s.object<ForbiddenErrorRep>({
  code: s.string(),
  message: s.string(),
});
