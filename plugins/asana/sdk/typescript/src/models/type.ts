import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom
 * field. Must be one of the given values.
 */
export const Type = {
  Text: "text",
  Enum: "enum",
  MultiEnum: "multi_enum",
  Number: "number",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
