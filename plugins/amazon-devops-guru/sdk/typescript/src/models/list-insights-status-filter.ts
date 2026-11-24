import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listInsightsAnyStatusFilterSchema,
  type ListInsightsAnyStatusFilter,
} from "./list-insights-any-status-filter.js";
import {
  listInsightsClosedStatusFilterSchema,
  type ListInsightsClosedStatusFilter,
} from "./list-insights-closed-status-filter.js";
import {
  listInsightsOngoingStatusFilterSchema,
  type ListInsightsOngoingStatusFilter,
} from "./list-insights-ongoing-status-filter.js";

export type ListInsightsStatusFilter = {
  ongoing?: ListInsightsOngoingStatusFilter;
  closed?: ListInsightsClosedStatusFilter;
  any?: ListInsightsAnyStatusFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listInsightsStatusFilterSchema: Schema<ListInsightsStatusFilter> =
  s.object<ListInsightsStatusFilter>(
    {
      ongoing: s.optional(s.lazy(() => listInsightsOngoingStatusFilterSchema)),
      closed: s.optional(s.lazy(() => listInsightsClosedStatusFilterSchema)),
      any: s.optional(s.lazy(() => listInsightsAnyStatusFilterSchema)),
      _keysMap: {
        ongoing: "Ongoing",
        closed: "Closed",
        any: "Any",
      },
    },
    { additionalProperties: s.json() },
  );
