import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResultError = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
};

export const resultErrorSchema: Schema<ResultError> = s.object<ResultError>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
});
