import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { costGroupBySchema, type CostGroupBy } from "../cost-group-by.js";

/** Group the costs by the specified fields. Currently only `line_item` is supported. */
export type GroupBy = CostGroupBy;

export const groupBySchema: Schema<GroupBy> = s.of<GroupBy>(s.union([s.lazy(() => costGroupBySchema)]));
