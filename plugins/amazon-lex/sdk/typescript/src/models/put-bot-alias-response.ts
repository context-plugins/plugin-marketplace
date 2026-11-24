import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLogsResponseSchema,
  type ConversationLogsResponse,
} from "./conversation-logs-response.js";
import { tagSchema, type Tag } from "./tag.js";

export type PutBotAliasResponse = {
  /** The name of the alias. */
  name?: string;
  /** A description of the alias. */
  description?: string;
  /** The version of the bot that the alias points to. */
  botVersion?: string;
  /** The name of the bot that the alias points to. */
  botName?: string;
  /**
   * The date that the bot alias was updated. When you create a resource, the creation date and the
   * last updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the bot alias was created. */
  createdDate?: Date;
  /** The checksum for the current version of the alias. */
  checksum?: string;
  conversationLogs?: ConversationLogsResponse;
  /** A list of tags associated with a bot. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putBotAliasResponseSchema: Schema<PutBotAliasResponse> = s.object<PutBotAliasResponse>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    botName: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    checksum: s.optional(s.string()),
    conversationLogs: s.optional(s.lazy(() => conversationLogsResponseSchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
