import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported filter operator. */
export const PlatformFilterOperator = {
  Equals: "EQUALS",
  NotEquals: "NOT_EQUALS",
  Gt: "GT",
  Gte: "GTE",
  Lt: "LT",
  Lte: "LTE",
} as const;
export type PlatformFilterOperator =
  | (typeof PlatformFilterOperator)[keyof typeof PlatformFilterOperator]
  | (string & {});

export const platformFilterOperatorSchema: EnumSchema<PlatformFilterOperator> =
  s.enumOf<PlatformFilterOperator>(PlatformFilterOperator);
