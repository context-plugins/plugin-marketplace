import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAnalyzerStatus3Schema, type BotAnalyzerStatus3 } from "./bot-analyzer-status3.js";

export type StopBotAnalyzerResponse = {
  /** The unique identifier of the bot. */
  botId?: string;
  /** The version of the bot. */
  botVersion?: string;
  /** The locale identifier of the bot locale. */
  localeId?: string;
  /**
   * The updated status of the analysis. The status will be Stopping and will eventually transition
   * to Stopped. Valid Values: Processing | Available | Failed | Stopping | Stopped
   */
  botAnalyzerStatus?: BotAnalyzerStatus3;
  /** The unique identifier of the analysis request. */
  botAnalyzerRequestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBotAnalyzerResponseSchema: Schema<StopBotAnalyzerResponse> =
  s.object<StopBotAnalyzerResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botAnalyzerStatus: s.optional(s.lazy(() => botAnalyzerStatus3Schema)),
      botAnalyzerRequestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
