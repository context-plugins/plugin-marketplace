import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multipleValuesSettingSchema, type MultipleValuesSetting } from "./multiple-values-setting.js";
import { obfuscationSettingSchema, type ObfuscationSetting } from "./obfuscation-setting.js";
import {
  slotValueElicitationSettingSchema,
  type SlotValueElicitationSetting,
} from "./slot-value-elicitation-setting.js";
import { subSlotSettingSchema, type SubSlotSetting } from "./sub-slot-setting.js";

export type UpdateSlotResponse = {
  /** The unique identifier of the slot that was updated. */
  slotId?: string;
  /** The updated name of the slot. */
  slotName?: string;
  /** The updated description of the bot. */
  description?: string;
  /** The updated identifier of the slot type that provides values for the slot. */
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  /** The identifier of the bot that contains the slot. */
  botId?: string;
  /** The version of the bot that contains the slot. Will always be DRAFT. */
  botVersion?: string;
  /** The locale that contains the slot. */
  localeId?: string;
  /** The intent that contains the slot. */
  intentId?: string;
  /** The timestamp of the date and time that the slot was created. */
  creationDateTime?: Date;
  /** The timestamp of the date and time that the slot was last updated. */
  lastUpdatedDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSlotResponseSchema: Schema<UpdateSlotResponse> = s.object<UpdateSlotResponse>(
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
    lastUpdatedDateTime: s.optional(s.dateTime()),
    multipleValuesSetting: s.optional(s.lazy(() => multipleValuesSettingSchema)),
    subSlotSetting: s.optional(s.lazy(() => subSlotSettingSchema)),
  },
  { additionalProperties: s.json() },
);
