import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localizedBridgePhrasesSchema, type LocalizedBridgePhrases } from "./localized-bridge-phrases.js";

/** Default bridge phrases (used when no tool-specific entry matches). */
export type BridgePhraseMessages1 = {
  /** Ordered bridge phrases for this scope. */
  messages?: string[];
  /** Per-language overrides keyed by BCP-47 tag (e.g. "es-US"). */
  localized?: Record<string, LocalizedBridgePhrases>;
};

export const bridgePhraseMessages1Schema: Schema<BridgePhraseMessages1> = s.object<BridgePhraseMessages1>({
  messages: s.optional(s.array(s.string())),
  localized: s.optional(
    s.record(
      s.string(),
      s.lazy(() => localizedBridgePhrasesSchema),
    ),
  ),
});
