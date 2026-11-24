import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChangeType = {
  Percentage: "percentage",
  Absolute: "absolute",
} as const;
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType] | (string & {});

export const changeTypeSchema: EnumSchema<ChangeType> = s.enumOf<ChangeType>(ChangeType);
