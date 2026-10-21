import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort direction. */
export const DirectionEnum = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type DirectionEnum = (typeof DirectionEnum)[keyof typeof DirectionEnum] | (string & {});

export const directionEnumSchema: EnumSchema<DirectionEnum> = s.enumOf<DirectionEnum>(DirectionEnum);
