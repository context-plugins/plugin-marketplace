import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Per-language bridge phrase overrides (no further nesting). */
export type LocalizedBridgePhrases = {
  /** Bridge phrases for this language. */
  messages?: string[];
};

export const localizedBridgePhrasesSchema: Schema<LocalizedBridgePhrases> = s.object<LocalizedBridgePhrases>({
  messages: s.optional(s.array(s.string())),
});
