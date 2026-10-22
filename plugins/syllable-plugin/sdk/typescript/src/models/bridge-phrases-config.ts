import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bridgePhraseMessagesSchema, type BridgePhraseMessages } from "./bridge-phrase-messages.js";
import {
  smartTurnTimeoutSecondsSchema,
  type SmartTurnTimeoutSeconds,
} from "./unions/smart-turn-timeout-seconds.js";

/**
 * Configuration for conversational bridge phrases.
 *
 * Top-level fields are the default (English) phrases. The `localized` dict provides per-language
 * overrides keyed by BCP-47 language tag.
 */
export type BridgePhrasesConfig = {
  /** Unified ordered bridge phrases. If empty, legacy fields are used. */
  messages?: string[];
  /**
   * When true, unified messages are played in randomized no-repeat cycles. Ignored when unified
   * messages are disabled.
   *
   * @default false
   */
  randomizeMessages?: boolean;
  /** Messages to say when the agent is first delayed. */
  firstSlowMessages?: string[];
  /** Messages to say when the agent is significantly delayed. */
  verySlowMessages?: string[];
  /** Messages to say when a tool call is in progress. */
  toolResponses?: string[];
  /** Per-language overrides keyed by BCP-47 tag (e.g. "es-US"). */
  localized?: Record<string, BridgePhraseMessages>;
  /**
   * Seconds of caller silence before injecting the first bridge phrase. Subsequent sleep intervals
   * are 2x, 3x, 4x this base. When unset, the service-wide default applies.
   */
  smartTurnTimeoutSeconds?: SmartTurnTimeoutSeconds;
};

export const bridgePhrasesConfigSchema: Schema<BridgePhrasesConfig> = s.object<BridgePhrasesConfig>({
  messages: s.optional(s.array(s.string())),
  randomizeMessages: s.defaulted(s.boolean(), false),
  firstSlowMessages: s.optional(s.array(s.string())),
  verySlowMessages: s.optional(s.array(s.string())),
  toolResponses: s.optional(s.array(s.string())),
  localized: s.optional(
    s.record(
      s.string(),
      s.lazy(() => bridgePhraseMessagesSchema),
    ),
  ),
  smartTurnTimeoutSeconds: s.optional(s.lazy(() => smartTurnTimeoutSecondsSchema)),
  _keysMap: {
    randomizeMessages: "randomize_messages",
    firstSlowMessages: "first_slow_messages",
    verySlowMessages: "very_slow_messages",
    toolResponses: "tool_responses",
    smartTurnTimeoutSeconds: "smart_turn_timeout_seconds",
  },
});
