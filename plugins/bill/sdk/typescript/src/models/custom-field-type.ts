import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the custom field kind in the Spend API. */
export const CustomFieldType = {
  CustomSelector: "CUSTOM_SELECTOR",
  Note: "NOTE",
} as const;
export type CustomFieldType = (typeof CustomFieldType)[keyof typeof CustomFieldType] | (string & {});

export const customFieldTypeSchema: EnumSchema<CustomFieldType> = s.enumOf<CustomFieldType>(CustomFieldType);
