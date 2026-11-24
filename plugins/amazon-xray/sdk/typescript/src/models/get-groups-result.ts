import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupSummarySchema, type GroupSummary } from "./group-summary.js";

export type GetGroupsResult = {
  /** The collection of all active groups. */
  groups?: GroupSummary[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getGroupsResultSchema: Schema<GetGroupsResult> = s.object<GetGroupsResult>(
  {
    groups: s.optional(s.array(s.lazy(() => groupSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      groups: "Groups",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
