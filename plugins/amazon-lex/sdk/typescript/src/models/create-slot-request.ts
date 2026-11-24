import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multipleValuesSettingSchema, type MultipleValuesSetting } from "./multiple-values-setting.js";
import { obfuscationSettingSchema, type ObfuscationSetting } from "./obfuscation-setting.js";
import {
  slotValueElicitationSettingSchema,
  type SlotValueElicitationSetting,
} from "./slot-value-elicitation-setting.js";
import { subSlotSettingSchema, type SubSlotSetting } from "./sub-slot-setting.js";

export type CreateSlotRequest = {
  /** The name of the slot. Slot names must be unique within the bot that contains the slot. */
  slotName: string;
  /** A description of the slot. Use this to help identify the slot in lists. */
  description?: string;
  /**
   * The unique identifier for the slot type associated with this slot. The slot type determines the
   * values that can be entered into the slot.
   */
  slotTypeId?: string;
  valueElicitationSetting: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  /** The identifier of the bot associated with the slot. */
  botId: string;
  /** The version of the bot associated with the slot. */
  botVersion: string;
  /**
   * The identifier of the language and locale that the slot will be used in. The string must match
   * one of the supported locales. All of the bots, intents, slot types used by the slot must have
   * the same locale. For more information, see Supported languages.
   */
  localeId: string;
  /** The identifier of the intent that contains the slot. */
  intentId: string;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotRequestSchema: Schema<CreateSlotRequest> = s.object<CreateSlotRequest>(
  {
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
