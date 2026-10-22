import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort by oldest first (asc) or newest first (desc). Version 1 is always the oldest. */
export const OrderByDirection1Enum = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type OrderByDirection1Enum =
  | (typeof OrderByDirection1Enum)[keyof typeof OrderByDirection1Enum]
  | (string & {});

export const orderByDirection1EnumSchema: EnumSchema<OrderByDirection1Enum> =
  s.enumOf<OrderByDirection1Enum>(OrderByDirection1Enum);
