import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of the slot type. Custom - A slot type that you created using custom values.
 * For more information, see Creating custom slot types. Extended - A slot type created by extending
 * the AMAZON.AlphaNumeric built-in slot type. For more information, see AMAZON.AlphaNumeric .
 * ExternalGrammar - A slot type using a custom GRXML grammar to define values. For more
 * information, see Using a custom grammar slot type.
 */
export const SlotTypeCategory = {
  Custom: "Custom",
  Extended: "Extended",
  ExternalGrammar: "ExternalGrammar",
  Composite: "Composite",
} as const;
export type SlotTypeCategory = (typeof SlotTypeCategory)[keyof typeof SlotTypeCategory] | (string & {});

export const slotTypeCategorySchema: EnumSchema<SlotTypeCategory> =
  s.enumOf<SlotTypeCategory>(SlotTypeCategory);
