import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** lastSoldDescending = newest sale first */
export const Sort = {
  QuantityAscending: "quantityAscending",
  LastSoldDescending: "lastSoldDescending",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
