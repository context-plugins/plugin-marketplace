import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttributeTypeDto = {
  Text: "text",
  Number: "number",
  Checkbox: "checkbox",
  Datetime: "datetime",
  SingleSelect: "singleSelect",
  MultiSelect: "multiSelect",
} as const;
export type AttributeTypeDto = (typeof AttributeTypeDto)[keyof typeof AttributeTypeDto] | (string & {});

export const attributeTypeDtoSchema: EnumSchema<AttributeTypeDto> =
  s.enumOf<AttributeTypeDto>(AttributeTypeDto);
