import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpiryDays1 = {
  Never: "never",
} as const;
export type ExpiryDays1 = (typeof ExpiryDays1)[keyof typeof ExpiryDays1] | (string & {});

export const expiryDays1Schema: EnumSchema<ExpiryDays1> = s.enumOf<ExpiryDays1>(ExpiryDays1);
