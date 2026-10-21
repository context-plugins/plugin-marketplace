import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HunkRep = {
  /** Line number of beginning of code reference hunk */
  startingLineNumber: number;
  /** Contextual lines of code that include the referenced feature flag */
  lines?: string;
  /** The project key */
  projKey?: string;
  /** The feature flag key */
  flagKey?: string;
  /** An array of flag key aliases */
  aliases?: string[];
};

export const hunkRepSchema: Schema<HunkRep> = s.object<HunkRep>({
  startingLineNumber: s.int(),
  lines: s.optional(s.string()),
  projKey: s.optional(s.string()),
  flagKey: s.optional(s.string()),
  aliases: s.optional(s.array(s.string())),
});
