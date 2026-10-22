import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Bridge phrase message lists for a single language. */
export type BridgePhraseMessages = {
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
};

export const bridgePhraseMessagesSchema: Schema<BridgePhraseMessages> = s.object<BridgePhraseMessages>({
  messages: s.optional(s.array(s.string())),
  randomizeMessages: s.defaulted(s.boolean(), false),
  firstSlowMessages: s.optional(s.array(s.string())),
  verySlowMessages: s.optional(s.array(s.string())),
  toolResponses: s.optional(s.array(s.string())),
  _keysMap: {
    randomizeMessages: "randomize_messages",
    firstSlowMessages: "first_slow_messages",
    verySlowMessages: "very_slow_messages",
    toolResponses: "tool_responses",
  },
});
