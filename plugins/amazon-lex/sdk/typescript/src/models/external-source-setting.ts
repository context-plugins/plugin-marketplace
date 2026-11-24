import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { grammarSlotTypeSettingSchema, type GrammarSlotTypeSetting } from "./grammar-slot-type-setting.js";

export type ExternalSourceSetting = {
  grammarSlotTypeSetting?: GrammarSlotTypeSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalSourceSettingSchema: Schema<ExternalSourceSetting> = s.object<ExternalSourceSetting>(
  {
    grammarSlotTypeSetting: s.optional(s.lazy(() => grammarSlotTypeSettingSchema)),
  },
  { additionalProperties: s.json() },
);
