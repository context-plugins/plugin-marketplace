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

export type UpdateSlotTypeRequest = {
  /** The unique identifier of the slot type to update. */
  slotTypeId: string;
  /** The new name of the slot type. */
  slotTypeName: string;
  /** The new description of the slot type. */
  description?: string;
  /**
   * A new list of values and their optional synonyms that define the values that the slot type can
   * take.
   */
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  /** The new built-in slot type that should be used as the parent of this slot type. */
  parentSlotTypeSignature?: string;
  /** The identifier of the bot that contains the slot type. */
  botId: string;
  /** The version of the bot that contains the slot type. Must be DRAFT. */
  botVersion: string;
  /**
   * The identifier of the language and locale that contains the slot type. The string must match
   * one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSlotTypeRequestSchema: Schema<UpdateSlotTypeRequest> = s.object<UpdateSlotTypeRequest>(
  {
    slotTypeId: s.string(),
    slotTypeName: s.string(),
    description: s.optional(s.string()),
    slotTypeValues: s.optional(s.array(s.lazy(() => slotTypeValueSchema))),
    valueSelectionSetting: s.optional(s.lazy(() => slotValueSelectionSettingSchema)),
    parentSlotTypeSignature: s.optional(s.string()),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    externalSourceSetting: s.optional(s.lazy(() => externalSourceSettingSchema)),
    compositeSlotTypeSetting: s.optional(s.lazy(() => compositeSlotTypeSettingSchema)),
  },
  { additionalProperties: s.json() },
);
