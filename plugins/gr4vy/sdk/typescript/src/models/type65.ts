import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `report-execution`. */
export const Type65 = {
  ReportExecution: "report-execution",
} as const;
export type Type65 = (typeof Type65)[keyof typeof Type65] | (string & {});

export const type65Schema: EnumSchema<Type65> = s.enumOf<Type65>(Type65);
