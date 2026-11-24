import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAnalyzerStatus2Schema, type BotAnalyzerStatus2 } from "./bot-analyzer-status2.js";

export type StartBotAnalyzerResponse = {
  /** The unique identifier of the bot being analyzed. */
  botId?: string;
  /** The version of the bot being analyzed. */
  botVersion?: string;
  /** The locale identifier of the bot locale being analyzed. */
  localeId?: string;
  /**
   * The current status of the analysis. The initial status is Processing. Valid Values: Processing
   * | Available | Failed | Stopping | Stopped
   */
  botAnalyzerStatus?: BotAnalyzerStatus2;
  /**
   * A unique identifier for this analysis request. Use this identifier to check the status and
   * retrieve results.
   */
  botAnalyzerRequestId?: string;
  /** The date and time when the analysis was initiated. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBotAnalyzerResponseSchema: Schema<StartBotAnalyzerResponse> =
  s.object<StartBotAnalyzerResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botAnalyzerStatus: s.optional(s.lazy(() => botAnalyzerStatus2Schema)),
      botAnalyzerRequestId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
