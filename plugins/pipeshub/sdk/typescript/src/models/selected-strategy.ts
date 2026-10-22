import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SelectedStrategy = {
  Manual: "MANUAL",
  Scheduled: "SCHEDULED",
  Webhook: "WEBHOOK",
} as const;
export type SelectedStrategy = (typeof SelectedStrategy)[keyof typeof SelectedStrategy] | (string & {});

export const selectedStrategySchema: EnumSchema<SelectedStrategy> =
  s.enumOf<SelectedStrategy>(SelectedStrategy);
