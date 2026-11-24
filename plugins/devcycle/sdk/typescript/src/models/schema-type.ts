import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SchemaType = {
  Enum: "enum",
} as const;
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType] | (string & {});

export const schemaTypeSchema: EnumSchema<SchemaType> = s.enumOf<SchemaType>(SchemaType);
