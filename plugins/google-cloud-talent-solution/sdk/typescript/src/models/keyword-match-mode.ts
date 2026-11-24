import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match
 * are set, keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL
 * if no value is specified.
 */
export const KeywordMatchMode = {
  KeywordMatchModeUnspecified: "KEYWORD_MATCH_MODE_UNSPECIFIED",
  KeywordMatchDisabled: "KEYWORD_MATCH_DISABLED",
  KeywordMatchAll: "KEYWORD_MATCH_ALL",
  KeywordMatchTitleOnly: "KEYWORD_MATCH_TITLE_ONLY",
} as const;
export type KeywordMatchMode = (typeof KeywordMatchMode)[keyof typeof KeywordMatchMode] | (string & {});

export const keywordMatchModeSchema: EnumSchema<KeywordMatchMode> =
  s.enumOf<KeywordMatchMode>(KeywordMatchMode);
