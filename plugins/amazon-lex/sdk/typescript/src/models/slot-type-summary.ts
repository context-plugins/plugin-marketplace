import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotTypeCategorySchema, type SlotTypeCategory } from "./slot-type-category.js";

export type SlotTypeSummary = {
  /** The unique identifier assigned to the slot type. */
  slotTypeId?: string;
  /** The name of the slot type. */
  slotTypeName?: string;
  /** The description of the slot type. */
  description?: string;
  /** If the slot type is derived from a built-on slot type, the name of the parent slot type. */
  parentSlotTypeSignature?: string;
  /** A timestamp of the date and time that the slot type was last updated. */
  lastUpdatedDateTime?: Date;
  /**
   * Indicates the type of the slot type. Custom - A slot type that you created using custom values.
   * For more information, see Creating custom slot types. Extended - A slot type created by
   * extending the AMAZON.AlphaNumeric built-in slot type. For more information, see
   * AMAZON.AlphaNumeric . ExternalGrammar - A slot type using a custom GRXML grammar to define
   * values. For more information, see Using a custom grammar slot type.
   */
  slotTypeCategory?: SlotTypeCategory;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeSummarySchema: Schema<SlotTypeSummary> = s.object<SlotTypeSummary>(
  {
    slotTypeId: s.optional(s.string()),
    slotTypeName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentSlotTypeSignature: s.optional(s.string()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    slotTypeCategory: s.optional(s.lazy(() => slotTypeCategorySchema)),
  },
  { additionalProperties: s.json() },
);
