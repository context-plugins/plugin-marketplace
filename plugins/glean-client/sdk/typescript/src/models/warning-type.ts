import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the warning. */
export const WarningType = {
  LongQuery: "LONG_QUERY",
  QuotedPunctuation: "QUOTED_PUNCTUATION",
  PunctuationOnly: "PUNCTUATION_ONLY",
  CopypastedQuotes: "COPYPASTED_QUOTES",
  InvalidOperator: "INVALID_OPERATOR",
  MaybeInvalidFacetQuery: "MAYBE_INVALID_FACET_QUERY",
  TooManyDatasourceGroups: "TOO_MANY_DATASOURCE_GROUPS",
} as const;
export type WarningType = (typeof WarningType)[keyof typeof WarningType] | (string & {});

export const warningTypeSchema: EnumSchema<WarningType> = s.enumOf<WarningType>(WarningType);
