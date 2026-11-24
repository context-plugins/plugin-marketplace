import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeLexGetSessionRequest = {
  /** The name of the bot that contains the session data. */
  botName: string;
  /** The alias in use for the bot that contains the session data. */
  botAlias: string;
  /**
   * The ID of the client application user. Amazon Lex uses this to identify a user's conversation
   * with your bot.
   */
  userId: string;
  /**
   * A string used to filter the intents returned in the recentIntentSummaryView structure. When you
   * specify a filter, only intents with their checkpointLabel field set to that string are
   * returned.
   */
  checkpointLabelFilter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexGetSessionRequestSchema: Schema<RuntimeLexGetSessionRequest> =
  s.object<RuntimeLexGetSessionRequest>(
    {
      botName: s.string(),
      botAlias: s.string(),
      userId: s.string(),
      checkpointLabelFilter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
