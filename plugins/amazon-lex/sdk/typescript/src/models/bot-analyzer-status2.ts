import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the analysis. The initial status is Processing. Valid Values: Processing |
 * Available | Failed | Stopping | Stopped
 */
export const BotAnalyzerStatus2 = {
  Processing: "Processing",
  Available: "Available",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type BotAnalyzerStatus2 = (typeof BotAnalyzerStatus2)[keyof typeof BotAnalyzerStatus2] | (string & {});

export const botAnalyzerStatus2Schema: EnumSchema<BotAnalyzerStatus2> =
  s.enumOf<BotAnalyzerStatus2>(BotAnalyzerStatus2);
