import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multipleValuesSettingSchema, type MultipleValuesSetting } from "./multiple-values-setting.js";
import { obfuscationSettingSchema, type ObfuscationSetting } from "./obfuscation-setting.js";
import {
  slotValueElicitationSettingSchema,
  type SlotValueElicitationSetting,
} from "./slot-value-elicitation-setting.js";
import { subSlotSettingSchema, type SubSlotSetting } from "./sub-slot-setting.js";

export type UpdateSlotRequest = {
  /** The unique identifier for the slot to update. */
  slotId: string;
  /** The new name for the slot. */
  slotName: string;
  /** The new description for the slot. */
  description?: string;
  /** The unique identifier of the new slot type to associate with this slot. */
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  /** The unique identifier of the bot that contains the slot. */
  botId: string;
  /** The version of the bot that contains the slot. Must always be DRAFT. */
  botVersion: string;
  /**
   * The identifier of the language and locale that contains the slot. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The identifier of the intent that contains the slot. */
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSlotRequestSchema: Schema<UpdateSlotRequest> = s.object<UpdateSlotRequest>(
  {
    slotId: s.string(),
    slotName: s.string(),
    description: s.optional(s.string()),
    slotTypeId: s.optional(s.string()),
    valueElicitationSetting: slotValueElicitationSettingSchema,
    obfuscationSetting: s.optional(s.lazy(() => obfuscationSettingSchema)),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    intentId: s.string(),
    multipleValuesSetting: s.optional(s.lazy(() => multipleValuesSettingSchema)),
    subSlotSetting: s.optional(s.lazy(() => subSlotSettingSchema)),
  },
  { additionalProperties: s.json() },
);
