import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLogsResponseSchema,
  type ConversationLogsResponse,
} from "./conversation-logs-response.js";

export type BotAliasMetadata = {
  /** The name of the bot alias. */
  name?: string;
  /** A description of the bot alias. */
  description?: string;
  /** The version of the Amazon Lex bot to which the alias points. */
  botVersion?: string;
  /** The name of the bot to which the alias points. */
  botName?: string;
  /**
   * The date that the bot alias was updated. When you create a resource, the creation date and last
   * updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the bot alias was created. */
  createdDate?: Date;
  /** Checksum of the bot alias. */
  checksum?: string;
  conversationLogs?: ConversationLogsResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasMetadataSchema: Schema<BotAliasMetadata> = s.object<BotAliasMetadata>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    botName: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    checksum: s.optional(s.string()),
    conversationLogs: s.optional(s.lazy(() => conversationLogsResponseSchema)),
  },
  { additionalProperties: s.json() },
);
