import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botStatus5Schema, type BotStatus5 } from "./bot-status5.js";

export type DeleteBotVersionResponse = {
  /** The identifier of the bot that is being deleted. */
  botId?: string;
  /** The version of the bot that is being deleted. */
  botVersion?: string;
  /** The current status of the bot. */
  botStatus?: BotStatus5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotVersionResponseSchema: Schema<DeleteBotVersionResponse> =
  s.object<DeleteBotVersionResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      botStatus: s.optional(s.lazy(() => botStatus5Schema)),
    },
    { additionalProperties: s.json() },
  );
