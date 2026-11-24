import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotAliasTestExecutionTarget = {
  /** The bot Id of the bot alias used in the test set execution. */
  botId: string;
  /** The bot alias Id of the bot alias used in the test set execution. */
  botAliasId: string;
  /** The locale Id of the bot alias used in the test set execution. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasTestExecutionTargetSchema: Schema<BotAliasTestExecutionTarget> =
  s.object<BotAliasTestExecutionTarget>(
    {
      botId: s.string(),
      botAliasId: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
