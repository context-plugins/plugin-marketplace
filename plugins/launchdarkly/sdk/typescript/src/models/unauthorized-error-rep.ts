import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnauthorizedErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const unauthorizedErrorRepSchema: Schema<UnauthorizedErrorRep> = s.object<UnauthorizedErrorRep>({
  code: s.string(),
  message: s.string(),
});
