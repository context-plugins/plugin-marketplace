import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countsSchema, type Counts } from "./unions/counts.js";

/** Per-request_status breakdown with total count and optional channel_manager_status counts. */
export type RequestStatusBreakdown = {
  /** Total number of requests with this request_status */
  totalCount: number;
  /** Counts by channel_manager_status within this request_status; omitted if none */
  counts?: Counts;
};

export const requestStatusBreakdownSchema: Schema<RequestStatusBreakdown> = s.object<RequestStatusBreakdown>({
  totalCount: s.int(),
  counts: s.optional(s.lazy(() => countsSchema)),
  _keysMap: {
    totalCount: "total_count",
  },
});
