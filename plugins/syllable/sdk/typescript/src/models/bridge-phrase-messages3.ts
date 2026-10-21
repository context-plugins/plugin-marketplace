import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localizedBridgePhrasesSchema, type LocalizedBridgePhrases } from "./localized-bridge-phrases.js";

/** Bridge phrase messages for a single scope (default or one tool). */
export type BridgePhraseMessages3 = {
  /** Ordered bridge phrases for this scope. */
  messages?: string[];
  /** Per-language overrides keyed by BCP-47 tag (e.g. "es-US"). */
  localized?: Record<string, LocalizedBridgePhrases>;
};

export const bridgePhraseMessages3Schema: Schema<BridgePhraseMessages3> = s.object<BridgePhraseMessages3>({
  messages: s.optional(s.array(s.string())),
  localized: s.optional(
    s.record(
      s.string(),
      s.lazy(() => localizedBridgePhrasesSchema),
    ),
  ),
});
