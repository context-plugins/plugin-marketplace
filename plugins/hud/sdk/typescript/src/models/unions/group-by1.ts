import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { groupBySchema, type GroupBy } from "../group-by.js";

/** Grouping dimensions; repeat the parameter to group by several at once */
export type GroupBy1 = GroupBy[];

export const groupBy1Schema: Schema<GroupBy1> = s.of<GroupBy1>(
  s.union([s.array(s.lazy(() => groupBySchema))]),
);
