import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttributeResourceTypeDto = {
  Dataset: "dataset",
  Check: "check",
  Column: "column",
} as const;
export type AttributeResourceTypeDto =
  | (typeof AttributeResourceTypeDto)[keyof typeof AttributeResourceTypeDto]
  | (string & {});

export const attributeResourceTypeDtoSchema: EnumSchema<AttributeResourceTypeDto> =
  s.enumOf<AttributeResourceTypeDto>(AttributeResourceTypeDto);
