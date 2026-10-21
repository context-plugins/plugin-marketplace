import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type ResponsesError = {
  /** The error code for the response. */
  code: Code;
  /** A human-readable description of the error. */
  message: string;
};

export const responsesErrorSchema: Schema<ResponsesError> = s.object<ResponsesError>({
  code: codeSchema,
  message: s.string(),
});
