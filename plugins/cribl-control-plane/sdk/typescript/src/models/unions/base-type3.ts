import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { numerifyFormatFixSchema, type NumerifyFormatFix } from "../numerify-format-fix.js";
import { numerifyFormatNoneSchema, type NumerifyFormatNone } from "../numerify-format-none.js";

export type BaseType3 = (NumerifyFormatFix & { format: "fix" }) | (NumerifyFormatNone & { format: "none" });

export const baseType3Schema: Schema<BaseType3> = s.discriminatedUnion<BaseType3>("format", {
  fix: numerifyFormatFixSchema,
  none: numerifyFormatNoneSchema,
});
