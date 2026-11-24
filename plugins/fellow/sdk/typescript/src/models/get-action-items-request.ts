import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionItemFiltersSchema, type ActionItemFilters } from "./action-item-filters.js";
import { actionItemOrderBySchema, type ActionItemOrderBy } from "./action-item-order-by.js";
import {
  paginatedRequestParamsInternalSchema,
  paginatedRequestParamsSchema,
  type PaginatedRequestParams,
} from "./paginated-request-params.js";

/** Request body for getting action items with optional filters and pagination. */
export type GetActionItemsRequest = {
  pagination?: PaginatedRequestParams;
  include?: Record<string, unknown>;
  /**
   * Sort order for action items. Valid values: 'created_at_desc' (default, newest first),
   * 'created_at_asc' (oldest first), 'updated_at_desc' (most recently updated first),
   * 'updated_at_asc' (least recently updated first), 'due_date' (soonest due date first, items
   * without due dates appear last)
   */
  orderBy?: ActionItemOrderBy;
  filters?: ActionItemFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getActionItemsRequestProperties: s.Shape<GetActionItemsRequest> = {
  pagination: s.optional(s.lazy(() => paginatedRequestParamsInternalSchema)),
  include: s.optional(s.record(s.string(), s.unknown())),
  orderBy: s.optional(s.lazy(() => actionItemOrderBySchema)),
  filters: s.optional(s.lazy(() => actionItemFiltersSchema)),
  _keysMap: {
    orderBy: "order_by",
  },
};

export const getActionItemsRequestInternalSchema: Schema<GetActionItemsRequest> =
  s.object<GetActionItemsRequest>(getActionItemsRequestProperties, { additionalProperties: s.json() });

export const getActionItemsRequestSchema: Schema<GetActionItemsRequest> = s.lazySchema(() =>
  s.object<GetActionItemsRequest>(
    {
      ...getActionItemsRequestProperties,
      pagination: s.optional(s.lazy(() => paginatedRequestParamsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
