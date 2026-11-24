import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subSlotValueElicitationSettingSchema,
  type SubSlotValueElicitationSetting,
} from "./sub-slot-value-elicitation-setting.js";

export type Specifications = {
  /** The unique identifier assigned to the slot type. */
  slotTypeId: string;
  valueElicitationSetting: SubSlotValueElicitationSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const specificationsSchema: Schema<Specifications> = s.object<Specifications>(
  {
    slotTypeId: s.string(),
    valueElicitationSetting: subSlotValueElicitationSettingSchema,
  },
  { additionalProperties: s.json() },
);
