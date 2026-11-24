import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multipleValuesSettingSchema, type MultipleValuesSetting } from "./multiple-values-setting.js";
import { obfuscationSettingSchema, type ObfuscationSetting } from "./obfuscation-setting.js";
import {
  slotValueElicitationSettingSchema,
  type SlotValueElicitationSetting,
} from "./slot-value-elicitation-setting.js";
import { subSlotSettingSchema, type SubSlotSetting } from "./sub-slot-setting.js";

export type DescribeSlotResponse = {
  /** The unique identifier generated for the slot. */
  slotId?: string;
  /** The name specified for the slot. */
  slotName?: string;
  /** The description specified for the slot. */
  description?: string;
  /** The identifier of the slot type that determines the values entered into the slot. */
  slotTypeId?: string;
  valueElicitationSetting?: SlotValueElicitationSetting;
  obfuscationSetting?: ObfuscationSetting;
  /** The identifier of the bot associated with the slot. */
  botId?: string;
  /** The version of the bot associated with the slot. */
  botVersion?: string;
  /** The language and locale specified for the slot. */
  localeId?: string;
  /** The identifier of the intent associated with the slot. */
  intentId?: string;
  /** A timestamp of the date and time that the slot was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the slot was last updated. */
  lastUpdatedDateTime?: Date;
  multipleValuesSetting?: MultipleValuesSetting;
  subSlotSetting?: SubSlotSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSlotResponseSchema: Schema<DescribeSlotResponse> = s.object<DescribeSlotResponse>(
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
