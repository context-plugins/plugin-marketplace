import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Version4 = {
  _1: 1,
} as const;
export type Version4 = (typeof Version4)[keyof typeof Version4] | (number & {});

export const version4Schema: EnumSchema<Version4> = s.enumOf<Version4>(Version4);
