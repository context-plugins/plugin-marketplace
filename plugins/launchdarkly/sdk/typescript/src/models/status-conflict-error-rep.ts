import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusConflictErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const statusConflictErrorRepSchema: Schema<StatusConflictErrorRep> = s.object<StatusConflictErrorRep>({
  code: s.string(),
  message: s.string(),
});
