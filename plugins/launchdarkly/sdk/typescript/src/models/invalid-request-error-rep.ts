import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidRequestErrorRep = {
  /** Specific error code encountered */
  code: string;
  /** Description of the error */
  message: string;
};

export const invalidRequestErrorRepSchema: Schema<InvalidRequestErrorRep> = s.object<InvalidRequestErrorRep>({
  code: s.string(),
  message: s.string(),
});
