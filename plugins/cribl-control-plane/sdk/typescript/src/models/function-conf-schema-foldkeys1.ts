import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaFoldkeys1 = {
  /**
   * When enabled (default), only the folded keys are kept. When disabled, the original entries are
   * retained alongside the folded keys.
   */
  deleteOriginal?: boolean;
  /**
   * Character or string used to separate key levels to be folded. Defaults to the dot (.)
   * character.
   */
  separator?: string;
  /** Optional regular expression to select a subset of the keys to fold. */
  selectionRegExp?: string;
  /**
   * Maximum recursion depth when traversing nested objects. Prevents infinite loops caused by
   * cyclic references. Defaults to 20.
   */
  maxDepth?: number;
};

export const functionConfSchemaFoldkeys1Schema: Schema<FunctionConfSchemaFoldkeys1> =
  s.object<FunctionConfSchemaFoldkeys1>({
    deleteOriginal: s.optional(s.boolean()),
    separator: s.optional(s.string()),
    selectionRegExp: s.optional(s.string()),
    maxDepth: s.optional(s.int()),
  });
