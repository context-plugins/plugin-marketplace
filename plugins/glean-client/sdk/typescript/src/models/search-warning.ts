import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { warningTypeSchema, type WarningType } from "./warning-type.js";

export type SearchWarning = {
  /** The type of the warning. */
  warningType: WarningType;
  /** The last term we considered in the user's long query. */
  lastUsedTerm?: string;
  /** The query after ignoring/removing quotes. */
  quotesIgnoredQuery?: string;
  /**
   * A list of query terms that were ignored when generating search results, if any. For example,
   * terms containing invalid filters such as "updated:invalid_date" will be ignored.
   */
  ignoredTerms?: string[];
};

export const searchWarningSchema: Schema<SearchWarning> = s.object<SearchWarning>({
  warningType: warningTypeSchema,
  lastUsedTerm: s.optional(s.string()),
  quotesIgnoredQuery: s.optional(s.string()),
  ignoredTerms: s.optional(s.array(s.string())),
});
