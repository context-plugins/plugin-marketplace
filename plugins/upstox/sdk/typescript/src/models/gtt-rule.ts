import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { strategySchema, type Strategy } from "./strategy.js";
import { triggerTypeSchema, type TriggerType } from "./trigger-type.js";

export type GttRule = {
  /**
   * Defines the strategy for the GTT order leg: ENTRY - First leg order STOPLOSS - Stop-loss order
   * TARGET - Target order
   */
  strategy: Strategy;
  /** Trigger type for each leg of the order */
  triggerType: TriggerType;
  /** Trigger price for the GTT order leg */
  triggerPrice: number;
  /** Optional parameter defining the trailing gap for the GTT order */
  trailingGap?: number;
  /** Optional parameter defining the market protection percentage for the GTT order */
  marketProtection?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gttRuleProperties: s.Shape<GttRule> = {
  strategy: strategySchema,
  triggerType: triggerTypeSchema,
  triggerPrice: s.float64(),
  trailingGap: s.optional(s.float64()),
  marketProtection: s.optional(s.float64()),
  _keysMap: {
    triggerType: "trigger_type",
    triggerPrice: "trigger_price",
    trailingGap: "trailing_gap",
    marketProtection: "market_protection",
  },
};

export const gttRuleInternalSchema: Schema<GttRule> = s.object<GttRule>(gttRuleProperties, {
  additionalProperties: s.json(),
});

export const gttRuleSchema: Schema<GttRule> = s.lazySchema(() =>
  s.object<GttRule>(
    {
      ...gttRuleProperties,
      marketProtection: s.optional(s.float64().check(s.gte(-1), s.lte(25))),
    },
    { additionalProperties: s.json() },
  ),
);
