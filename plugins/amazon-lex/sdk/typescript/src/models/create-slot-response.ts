import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multipleValuesSettingSchema, type MultipleValuesSetting } from "./multiple-values-setting.js";
import { obfuscationSettingSchema, type ObfuscationSetting } from "./obfuscation-setting.js";
import {
  slotValueElicitationSettingSchema,
  type SlotValueElicitationSetting,
} from "./slot-value-elicitation-setting.js";
import { subSlotSettingSchema, type SubSlotSetting } from "./sub-slot-setting.js";

export type CreateSlotResponse = {
  /**
   * The unique identifier associated with the slot. Use this to identify the slot when you update
   * or delete it.
   */
  slotId?: string;
  /** The name specified for the slot. */
  slotName?: string;
  /** The description associated with the slot. */
  description?: string;
  /** The unique identifier of the slot type associated with this slot. */
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  /** The unique identifier of the bot associated with the slot. */
  botId?: string;
  /** The version of the bot associated with the slot. */
  botVersion?: string;
  /** The language and local specified for the slot. */
  localeId?: string;
  /** The unique identifier of the intent associated with the slot. */
  intentId?: string;
  /** The timestamp of the date and time that the slot was created. */
  creationDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotResponseSchema: Schema<CreateSlotResponse> = s.object<CreateSlotResponse>(
  {
    slotId: s.optional(s.string()),
    slotName: s.optional(s.string()),
    description: s.optional(s.string()),
    slotTypeId: s.optional(s.string()),
    valueElicitationSetting: s.optional(s.lazy(() => slotValueElicitationSettingSchema)),
    obfuscationSetting: s.optional(s.lazy(() => obfuscationSettingSchema)),
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    intentId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    multipleValuesSetting: s.optional(s.lazy(() => multipleValuesSettingSchema)),
    subSlotSetting: s.optional(s.lazy(() => subSlotSettingSchema)),
  },
  { additionalProperties: s.json() },
);
