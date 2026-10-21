import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MethodNotAllowedErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const methodNotAllowedErrorRepSchema: Schema<MethodNotAllowedErrorRep> =
  s.object<MethodNotAllowedErrorRep>({
    code: s.string(),
    message: s.string(),
  });
