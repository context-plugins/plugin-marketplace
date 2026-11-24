import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetDiscrepancyReportBotAliasTarget = {
  /** The unique identifier for the bot alias. */
  botId: string;
  /** The unique identifier for the bot associated with the bot alias. */
  botAliasId: string;
  /** The unique identifier of the locale associated with the bot alias. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetDiscrepancyReportBotAliasTargetSchema: Schema<TestSetDiscrepancyReportBotAliasTarget> =
  s.object<TestSetDiscrepancyReportBotAliasTarget>(
    {
      botId: s.string(),
      botAliasId: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
