import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localizedBridgePhrasesSchema, type LocalizedBridgePhrases } from "./localized-bridge-phrases.js";

/** Phrase messages for this tool. */
export type BridgePhraseMessages2 = {
  /** Ordered bridge phrases for this scope. */
  messages?: string[];
  /** Per-language overrides keyed by BCP-47 tag (e.g. "es-US"). */
  localized?: Record<string, LocalizedBridgePhrases>;
};

export const bridgePhraseMessages2Schema: Schema<BridgePhraseMessages2> = s.object<BridgePhraseMessages2>({
  messages: s.optional(s.array(s.string())),
  localized: s.optional(
    s.record(
      s.string(),
      s.lazy(() => localizedBridgePhrasesSchema),
    ),
  ),
});
