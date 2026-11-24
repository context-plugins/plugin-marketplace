import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the historical analysis execution. Valid Values: Processing | Available | Failed |
 * Stopping | Stopped
 */
export const BotAnalyzerStatus = {
  Processing: "Processing",
  Available: "Available",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type BotAnalyzerStatus = (typeof BotAnalyzerStatus)[keyof typeof BotAnalyzerStatus] | (string & {});

export const botAnalyzerStatusSchema: EnumSchema<BotAnalyzerStatus> =
  s.enumOf<BotAnalyzerStatus>(BotAnalyzerStatus);
