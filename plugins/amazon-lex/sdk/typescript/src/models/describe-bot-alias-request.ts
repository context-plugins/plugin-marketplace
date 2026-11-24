import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotAliasRequest = {
  /** The identifier of the bot alias to describe. */
  botAliasId: string;
  /** The identifier of the bot associated with the bot alias to describe. */
  botId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotAliasRequestSchema: Schema<DescribeBotAliasRequest> =
  s.object<DescribeBotAliasRequest>(
    {
      botAliasId: s.string(),
      botId: s.string(),
    },
    { additionalProperties: s.json() },
  );
