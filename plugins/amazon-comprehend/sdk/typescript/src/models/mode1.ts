import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL. */
export const Mode1 = {
  MultiClass: "MULTI_CLASS",
  MultiLabel: "MULTI_LABEL",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);
