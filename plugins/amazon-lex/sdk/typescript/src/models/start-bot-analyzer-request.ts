import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartBotAnalyzerRequest = {
  /** The unique identifier of the bot to analyze. */
  botId: string;
  /**
   * The scope of analysis to perform. Currently only BotLocale scope is supported. Valid Values:
   * BotLocale
   *
   * @default "BotLocale"
   */
  analysisScope?: "BotLocale";
  /**
   * The locale identifier for the bot locale to analyze. Required when analysisScope is BotLocale.
   */
  localeId?: string;
  /** The version of the bot to analyze. Defaults to DRAFT if not specified. */
  botVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBotAnalyzerRequestSchema: Schema<StartBotAnalyzerRequest> =
  s.object<StartBotAnalyzerRequest>(
    {
      botId: s.string(),
      analysisScope: s.defaulted(s.literal("BotLocale"), "BotLocale"),
      localeId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
