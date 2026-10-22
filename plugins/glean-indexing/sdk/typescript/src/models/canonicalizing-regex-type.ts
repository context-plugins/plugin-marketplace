import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Regular expression to apply to an arbitrary string to transform it into a canonical string. */
export type CanonicalizingRegexType = {
  /** Regular expression to match to an arbitrary string. */
  matchRegex?: string;
  /** Regular expression to transform into a canonical string. */
  rewriteRegex?: string;
};

export const canonicalizingRegexTypeSchema: Schema<CanonicalizingRegexType> =
  s.object<CanonicalizingRegexType>({
    matchRegex: s.optional(s.string()),
    rewriteRegex: s.optional(s.string()),
  });
