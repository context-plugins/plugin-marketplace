import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compositeSlotTypeSettingSchema,
  type CompositeSlotTypeSetting,
} from "./composite-slot-type-setting.js";
import { externalSourceSettingSchema, type ExternalSourceSetting } from "./external-source-setting.js";
import { slotTypeValueSchema, type SlotTypeValue } from "./slot-type-value.js";
import {
  slotValueSelectionSettingSchema,
  type SlotValueSelectionSetting,
} from "./slot-value-selection-setting.js";

export type CreateSlotTypeResponse = {
  /**
   * The unique identifier assigned to the slot type. Use this to identify the slot type in the
   * UpdateSlotType and DeleteSlotType operations.
   */
  slotTypeId?: string;
  /** The name specified for the slot type. */
  slotTypeName?: string;
  /** The description specified for the slot type. */
  description?: string;
  /** The list of values that the slot type can assume. */
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  /** The signature of the base slot type specified for the slot type. */
  parentSlotTypeSignature?: string;
  /** The identifier for the bot associated with the slot type. */
  botId?: string;
  /** The version of the bot associated with the slot type. */
  botVersion?: string;
  /** The specified language and local specified for the slot type. */
  localeId?: string;
  /** A timestamp of the date and time that the slot type was created. */
  creationDateTime?: Date;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotTypeResponseSchema: Schema<CreateSlotTypeResponse> = s.object<CreateSlotTypeResponse>(
  {
    slotTypeId: s.optional(s.string()),
    slotTypeName: s.optional(s.string()),
    description: s.optional(s.string()),
    slotTypeValues: s.optional(s.array(s.lazy(() => slotTypeValueSchema))),
    valueSelectionSetting: s.optional(s.lazy(() => slotValueSelectionSettingSchema)),
    parentSlotTypeSignature: s.optional(s.string()),
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    externalSourceSetting: s.optional(s.lazy(() => externalSourceSettingSchema)),
    compositeSlotTypeSetting: s.optional(s.lazy(() => compositeSlotTypeSettingSchema)),
  },
  { additionalProperties: s.json() },
);
