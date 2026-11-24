import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefType = {
  RefTypeUnspecified: "REF_TYPE_UNSPECIFIED",
  Tag: "TAG",
  Branch: "BRANCH",
} as const;
export type RefType = (typeof RefType)[keyof typeof RefType] | (string & {});

export const refTypeSchema: EnumSchema<RefType> = s.enumOf<RefType>(RefType);
