import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecognizedBotMember = {
  /** The identifier of the bot member that processes the request. */
  botId: string;
  /** The name of the bot member that processes the request. */
  botName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizedBotMemberSchema: Schema<RecognizedBotMember> = s.object<RecognizedBotMember>(
  {
    botId: s.string(),
    botName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
