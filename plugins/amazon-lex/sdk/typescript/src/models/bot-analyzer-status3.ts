import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The updated status of the analysis. The status will be Stopping and will eventually transition to
 * Stopped. Valid Values: Processing | Available | Failed | Stopping | Stopped
 */
export const BotAnalyzerStatus3 = {
  Processing: "Processing",
  Available: "Available",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type BotAnalyzerStatus3 = (typeof BotAnalyzerStatus3)[keyof typeof BotAnalyzerStatus3] | (string & {});

export const botAnalyzerStatus3Schema: EnumSchema<BotAnalyzerStatus3> =
  s.enumOf<BotAnalyzerStatus3>(BotAnalyzerStatus3);
