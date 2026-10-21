import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bridgePhraseMessages1Schema, type BridgePhraseMessages1 } from "./bridge-phrase-messages1.js";
import { toolBridgePhraseConfigSchema, type ToolBridgePhraseConfig } from "./tool-bridge-phrase-config.js";
import {
  smartTurnTimeoutSeconds1Schema,
  type SmartTurnTimeoutSeconds1,
} from "./unions/smart-turn-timeout-seconds1.js";

/** Default phrases plus per-tool overrides. */
export type BridgePhrasesConfigPayload1 = {
  /** Default bridge phrases (used when no tool-specific entry matches). */
  phrases?: BridgePhraseMessages1;
  /** Per-tool phrase overrides. */
  tools?: ToolBridgePhraseConfig[];
  /**
   * Seconds of caller silence before injecting the first bridge phrase. Defaults to 2.75s when
   * omitted on write.
   */
  smartTurnTimeoutSeconds?: SmartTurnTimeoutSeconds1;
  /**
   * Whether to randomize the order of bridge phrases. When true, the order of the bridge phrases is
   * randomized for each call.
   *
   * @default false
   */
  randomizeBridgePhrases?: boolean;
};

export const bridgePhrasesConfigPayload1Schema: Schema<BridgePhrasesConfigPayload1> =
  s.object<BridgePhrasesConfigPayload1>({
    phrases: s.optional(s.lazy(() => bridgePhraseMessages1Schema)),
    tools: s.optional(s.array(s.lazy(() => toolBridgePhraseConfigSchema))),
    smartTurnTimeoutSeconds: s.optional(s.lazy(() => smartTurnTimeoutSeconds1Schema)),
    randomizeBridgePhrases: s.defaulted(s.boolean(), false),
    _keysMap: {
      smartTurnTimeoutSeconds: "smart_turn_timeout_seconds",
      randomizeBridgePhrases: "randomize_bridge_phrases",
    },
  });
