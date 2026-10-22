import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { requestStatusBreakdownSchema, type RequestStatusBreakdown } from "../request-status-breakdown.js";

/** Per request_status: total count and optional counts by channel_manager_status */
export type DetailedStatusCounts = Record<string, RequestStatusBreakdown>;

export const detailedStatusCountsSchema: Schema<DetailedStatusCounts> = s.of<DetailedStatusCounts>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => requestStatusBreakdownSchema),
    ),
  ]),
);
