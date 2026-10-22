import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How event fields are mapped to columns. */
export const MappingType2 = {
  Automatic: "automatic",
  Custom: "custom",
} as const;
export type MappingType2 = (typeof MappingType2)[keyof typeof MappingType2] | (string & {});

export const mappingType2Schema: EnumSchema<MappingType2> = s.enumOf<MappingType2>(MappingType2);
