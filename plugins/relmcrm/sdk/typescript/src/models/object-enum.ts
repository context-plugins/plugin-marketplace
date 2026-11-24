import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectEnum = {
  Activity: "activity",
} as const;
export type ObjectEnum = (typeof ObjectEnum)[keyof typeof ObjectEnum] | (string & {});

export const objectEnumSchema: EnumSchema<ObjectEnum> = s.enumOf<ObjectEnum>(ObjectEnum);
