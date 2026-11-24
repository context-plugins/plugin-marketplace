import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advancedRecognitionSettingSchema,
  type AdvancedRecognitionSetting,
} from "./advanced-recognition-setting.js";
import { resolutionStrategySchema, type ResolutionStrategy } from "./resolution-strategy.js";
import { slotValueRegexFilterSchema, type SlotValueRegexFilter } from "./slot-value-regex-filter.js";

export type SlotValueSelectionSetting = {
  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The
   * field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by
   * the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a
   * resolution list for the slot, return the first value in the resolution list as the slot type
   * value. If there is no resolution list, null is returned. If you don't specify the
   * valueSelectionStrategy, the default is ORIGINAL_VALUE.
   */
  resolutionStrategy: ResolutionStrategy;
  regexFilter?: SlotValueRegexFilter;
  advancedRecognitionSetting?: AdvancedRecognitionSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotValueSelectionSettingSchema: Schema<SlotValueSelectionSetting> =
  s.object<SlotValueSelectionSetting>(
    {
      resolutionStrategy: resolutionStrategySchema,
      regexFilter: s.optional(s.lazy(() => slotValueRegexFilterSchema)),
      advancedRecognitionSetting: s.optional(s.lazy(() => advancedRecognitionSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
