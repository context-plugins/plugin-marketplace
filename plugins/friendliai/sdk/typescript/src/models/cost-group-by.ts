import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cost group-by option. */
export const CostGroupBy = {
  LineItem: "line_item",
} as const;
export type CostGroupBy = (typeof CostGroupBy)[keyof typeof CostGroupBy] | (string & {});

export const costGroupBySchema: EnumSchema<CostGroupBy> = s.enumOf<CostGroupBy>(CostGroupBy);
