import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotResolutionStrategySchema, type SlotResolutionStrategy } from "./slot-resolution-strategy.js";

export type SlotResolutionSetting = {
  /**
   * Specifies whether assisted slot resolution is turned on for the slot or not. If the value is
   * EnhancedFallback, assisted slot resolution is activated when Amazon Lex V2 defaults to the
   * AMAZON.FallbackIntent. If the value is Default, assisted slot resolution is turned off.
   */
  slotResolutionStrategy: SlotResolutionStrategy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotResolutionSettingSchema: Schema<SlotResolutionSetting> = s.object<SlotResolutionSetting>(
  {
    slotResolutionStrategy: slotResolutionStrategySchema,
  },
  { additionalProperties: s.json() },
);
