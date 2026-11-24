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

export type CreateSlotTypeRequest = {
  /** The name for the slot. A slot type name must be unique within the intent. */
  slotTypeName: string;
  /**
   * A description of the slot type. Use the description to help identify the slot type in lists.
   */
  description?: string;
  /**
   * A list of SlotTypeValue objects that defines the values that the slot type can take. Each value
   * can have a list of synonyms, additional values that help train the machine learning model about
   * the values that it resolves for a slot.
   */
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  /**
   * The built-in slot type used as a parent of this slot type. When you define a parent slot type,
   * the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is
   * supported.
   */
  parentSlotTypeSignature?: string;
  /** The identifier of the bot associated with this slot type. */
  botId: string;
  /** The identifier of the bot version associated with this slot type. */
  botVersion: string;
  /**
   * The identifier of the language and locale that the slot type will be used in. The string must
   * match one of the supported locales. All of the bots, intents, and slots used by the slot type
   * must have the same locale. For more information, see Supported languages.
   */
  localeId: string;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotTypeRequestSchema: Schema<CreateSlotTypeRequest> = s.object<CreateSlotTypeRequest>(
  {
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
