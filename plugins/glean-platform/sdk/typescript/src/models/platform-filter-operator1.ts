import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Canonical Platform filter operator. */
export const PlatformFilterOperator1 = {
  Equals: "EQUALS",
  NotEquals: "NOT_EQUALS",
  Gt: "GT",
  Gte: "GTE",
  Lt: "LT",
  Lte: "LTE",
} as const;
export type PlatformFilterOperator1 =
  | (typeof PlatformFilterOperator1)[keyof typeof PlatformFilterOperator1]
  | (string & {});

export const platformFilterOperator1Schema: EnumSchema<PlatformFilterOperator1> =
  s.enumOf<PlatformFilterOperator1>(PlatformFilterOperator1);
