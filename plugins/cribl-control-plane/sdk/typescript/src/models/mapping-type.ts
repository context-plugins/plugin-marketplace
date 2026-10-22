import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How event fields are mapped to ClickHouse columns */
export const MappingType = {
  Automatic: "automatic",
  Custom: "custom",
} as const;
export type MappingType = (typeof MappingType)[keyof typeof MappingType] | (string & {});

export const mappingTypeSchema: EnumSchema<MappingType> = s.enumOf<MappingType>(MappingType);
