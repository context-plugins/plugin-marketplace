import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping |
 * Stopped
 */
export const BotAnalyzerStatus1 = {
  Processing: "Processing",
  Available: "Available",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type BotAnalyzerStatus1 = (typeof BotAnalyzerStatus1)[keyof typeof BotAnalyzerStatus1] | (string & {});

export const botAnalyzerStatus1Schema: EnumSchema<BotAnalyzerStatus1> =
  s.enumOf<BotAnalyzerStatus1>(BotAnalyzerStatus1);
