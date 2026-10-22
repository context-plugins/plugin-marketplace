import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { matchTypeSchema, type MatchType } from "./match-type.js";

/** A single text replacement rule. */
export type PronunciationOverride = {
  text: string;
  replacement: string;
  languages?: string[];
  provider?: string;
  voice?: string;
  /** Matching strategy for override text. */
  matchType?: MatchType;
  matchOptions?: string[];
  /** @default true */
  enabled?: boolean;
  notes?: string;
};

export const pronunciationOverrideSchema: Schema<PronunciationOverride> = s.object<PronunciationOverride>({
  text: s.string(),
  replacement: s.string(),
  languages: s.optional(s.array(s.string())),
  provider: s.optional(s.string()),
  voice: s.optional(s.string()),
  matchType: s.optional(s.lazy(() => matchTypeSchema)),
  matchOptions: s.optional(s.array(s.string())),
  enabled: s.defaulted(s.boolean(), true),
  notes: s.optional(s.string()),
  _keysMap: {
    matchType: "match_type",
    matchOptions: "match_options",
  },
});
