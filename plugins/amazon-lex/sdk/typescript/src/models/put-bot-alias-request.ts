import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conversationLogsRequestSchema, type ConversationLogsRequest } from "./conversation-logs-request.js";
import { tagSchema, type Tag } from "./tag.js";

export type PutBotAliasRequest = {
  /** The name of the alias. The name is not case sensitive. */
  name: string;
  /** A description of the alias. */
  description?: string;
  /** The version of the bot. */
  botVersion: string;
  /** The name of the bot. */
  botName: string;
  /**
   * Identifies a specific revision of the $LATEST version. When you create a new bot alias, leave
   * the checksum field blank. If you specify a checksum you get a BadRequestException exception.
   * When you want to update a bot alias, set the checksum field to the checksum of the most recent
   * revision of the $LATEST version. If you don't specify the checksum field, or if the checksum
   * does not match the $LATEST version, you get a PreconditionFailedException exception.
   */
  checksum?: string;
  conversationLogs?: ConversationLogsRequest;
  /**
   * A list of tags to add to the bot alias. You can only add tags when you create an alias, you
   * can't use the PutBotAlias operation to update the tags on a bot alias. To update tags, use the
   * TagResource operation.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putBotAliasRequestSchema: Schema<PutBotAliasRequest> = s.object<PutBotAliasRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    botVersion: s.string(),
    botName: s.string(),
    checksum: s.optional(s.string()),
    conversationLogs: s.optional(s.lazy(() => conversationLogsRequestSchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
