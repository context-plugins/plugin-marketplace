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

export type DescribeSlotTypeResponse = {
  /** The unique identifier for the slot type. */
  slotTypeId?: string;
  /** The name specified for the slot type. */
  slotTypeName?: string;
  /** The description specified for the slot type. */
  description?: string;
  /** The values that the slot type can take. Includes any synonyms for the slot type values. */
  slotTypeValues?: SlotTypeValue[];
  valueSelectionSetting?: SlotValueSelectionSetting;
  /** The built in slot type used as a parent to this slot type. */
  parentSlotTypeSignature?: string;
  /** The identifier of the bot associated with the slot type. */
  botId?: string;
  /** The version of the bot associated with the slot type. */
  botVersion?: string;
  /** The language and locale specified for the slot type. */
  localeId?: string;
  /** A timestamp of the date and time that the slot type was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the slot type was last updated. */
  lastUpdatedDateTime?: Date;
  externalSourceSetting?: ExternalSourceSetting;
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSlotTypeResponseSchema: Schema<DescribeSlotTypeResponse> =
  s.object<DescribeSlotTypeResponse>(
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
      lastUpdatedDateTime: s.optional(s.dateTime()),
      externalSourceSetting: s.optional(s.lazy(() => externalSourceSettingSchema)),
      compositeSlotTypeSetting: s.optional(s.lazy(() => compositeSlotTypeSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
