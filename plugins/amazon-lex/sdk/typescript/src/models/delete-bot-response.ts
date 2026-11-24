import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botStatus4Schema, type BotStatus4 } from "./bot-status4.js";

export type DeleteBotResponse = {
  /** The unique identifier of the bot that Amazon Lex is deleting. */
  botId?: string;
  /**
   * The current status of the bot. The status is Deleting while the bot and its associated
   * resources are being deleted.
   */
  botStatus?: BotStatus4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotResponseSchema: Schema<DeleteBotResponse> = s.object<DeleteBotResponse>(
  {
    botId: s.optional(s.string()),
    botStatus: s.optional(s.lazy(() => botStatus4Schema)),
  },
  { additionalProperties: s.json() },
);
