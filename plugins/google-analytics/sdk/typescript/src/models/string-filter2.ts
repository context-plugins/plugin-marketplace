import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchTypeSchema, type MatchType } from "./match-type.js";

/** Strings related filter. */
export type StringFilter2 = {
  /** The string value used for the matching. */
  value?: string;
  /** The match type for this filter. */
  matchType?: MatchType;
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stringFilter2Schema: Schema<StringFilter2> = s.object<StringFilter2>(
  {
    value: s.optional(s.string()),
    matchType: s.optional(s.lazy(() => matchTypeSchema)),
    caseSensitive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
