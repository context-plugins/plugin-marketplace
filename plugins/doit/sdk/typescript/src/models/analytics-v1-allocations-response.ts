import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allocationListItemSchema, type AllocationListItem } from "./allocation-list-item.js";

export type AnalyticsV1AllocationsResponse = {
  /** Page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Total number of allocations in the result set. */
  rowCount?: number;
  allocations?: AllocationListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1AllocationsResponseSchema: Schema<AnalyticsV1AllocationsResponse> =
  s.object<AnalyticsV1AllocationsResponse>(
    {
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
      allocations: s.optional(s.array(s.lazy(() => allocationListItemSchema))),
    },
    { additionalProperties: s.json() },
  );
