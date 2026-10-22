import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `metrics-explorer.total`. */
export const Type40 = {
  MetricsExplorerTotal: "metrics-explorer.total",
} as const;
export type Type40 = (typeof Type40)[keyof typeof Type40] | (string & {});

export const type40Schema: EnumSchema<Type40> = s.enumOf<Type40>(Type40);
