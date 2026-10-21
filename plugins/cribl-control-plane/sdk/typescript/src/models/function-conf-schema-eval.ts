import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluateField2Schema, type EvaluateField2 } from "./evaluate-field2.js";

export type FunctionConfSchemaEval = {
  /** Set of key-value pairs to evaluate and add/set */
  add?: EvaluateField2[];
  /** List of fields to keep. Supports * wildcards. Takes precedence over 'Remove fields'. */
  keep?: string[];
  /**
   * List of fields to remove. Supports * wildcards. Fields that match 'Keep fields' will not be
   * removed. Enclose field names containing special characters in single or double quotes.
   */
  remove?: string[];
  /**
   * When enabled (e.g. for Cribl Search), convert undefined expression results to null so
   * requested-but-missing fields appear in JSON output. When disabled (default), undefined is
   * preserved.
   */
  printUndefineds?: boolean;
};

export const functionConfSchemaEvalSchema: Schema<FunctionConfSchemaEval> = s.object<FunctionConfSchemaEval>({
  add: s.optional(s.array(s.lazy(() => evaluateField2Schema))),
  keep: s.optional(s.array(s.string())),
  remove: s.optional(s.array(s.string())),
  printUndefineds: s.optional(s.boolean()),
});
