import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotAliasRequest = {
  /** The name of the bot alias. The name is case sensitive. */
  name: string;
  /** The name of the bot. */
  botName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotAliasRequestSchema: Schema<GetBotAliasRequest> = s.object<GetBotAliasRequest>(
  {
    name: s.string(),
    botName: s.string(),
  },
  { additionalProperties: s.json() },
);
