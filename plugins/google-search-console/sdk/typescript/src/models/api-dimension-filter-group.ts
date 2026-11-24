import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiDimensionFilterSchema, type ApiDimensionFilter } from "./api-dimension-filter.js";
import { groupTypeSchema, type GroupType } from "./group-type.js";

/**
 * A set of `dimension` value filters to test against each row. Only rows that pass all filter
 * groups will be returned. All results within a filter group are either AND'ed or OR'ed together,
 * depending on the group type selected. All filter groups are AND'ed together.
 */
export type ApiDimensionFilterGroup = {
  /** Optional. The logic operator between filters of the same group. */
  groupType?: GroupType;
  /** Optional. A list of single-value filters in this group. */
  filters?: ApiDimensionFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiDimensionFilterGroupSchema: Schema<ApiDimensionFilterGroup> =
  s.object<ApiDimensionFilterGroup>(
    {
      groupType: s.optional(s.lazy(() => groupTypeSchema)),
      filters: s.optional(s.array(s.lazy(() => apiDimensionFilterSchema))),
    },
    { additionalProperties: s.json() },
  );
