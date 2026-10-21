import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotFoundErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const notFoundErrorRepSchema: Schema<NotFoundErrorRep> = s.object<NotFoundErrorRep>({
  code: s.string(),
  message: s.string(),
});
