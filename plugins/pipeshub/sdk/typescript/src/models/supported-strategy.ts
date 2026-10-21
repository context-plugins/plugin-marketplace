import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedStrategy = {
  Manual: "MANUAL",
  Scheduled: "SCHEDULED",
  Webhook: "WEBHOOK",
} as const;
export type SupportedStrategy = (typeof SupportedStrategy)[keyof typeof SupportedStrategy] | (string & {});

export const supportedStrategySchema: EnumSchema<SupportedStrategy> =
  s.enumOf<SupportedStrategy>(SupportedStrategy);
