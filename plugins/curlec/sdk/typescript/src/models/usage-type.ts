import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsageType = {
  SingleUse: "single_use",
  MultipleUse: "multiple_use",
} as const;
export type UsageType = (typeof UsageType)[keyof typeof UsageType] | (string & {});

export const usageTypeSchema: EnumSchema<UsageType> = s.enumOf<UsageType>(UsageType);
