import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAnalyzerStatusSchema, type BotAnalyzerStatus } from "./bot-analyzer-status.js";

export type BotAnalyzerHistorySummary = {
  /**
   * The status of the historical analysis execution. Valid Values: Processing | Available | Failed
   * | Stopping | Stopped
   */
  botAnalyzerStatus: BotAnalyzerStatus;
  /** The date and time when the analysis was initiated. */
  creationDateTime?: Date;
  /** The unique identifier for the analysis request. */
  botAnalyzerRequestId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAnalyzerHistorySummarySchema: Schema<BotAnalyzerHistorySummary> =
  s.object<BotAnalyzerHistorySummary>(
    {
      botAnalyzerStatus: botAnalyzerStatusSchema,
      creationDateTime: s.optional(s.dateTime()),
      botAnalyzerRequestId: s.string(),
    },
    { additionalProperties: s.json() },
  );
