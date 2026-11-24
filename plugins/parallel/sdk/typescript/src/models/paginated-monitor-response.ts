import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { monitorResponseSchema, type MonitorResponse } from "./monitor-response.js";
import { nextCursor1Schema, type NextCursor1 } from "./unions/next-cursor1.js";

/** Paginated list of monitors. */
export type PaginatedMonitorResponse = {
  /** List of monitors for the current page. */
  monitors: MonitorResponse[];
  /**
   * Opaque pagination token. Pass as `cursor` to retrieve the next page. Absent when there are no
   * more pages.
   */
  nextCursor?: NextCursor1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedMonitorResponseSchema: Schema<PaginatedMonitorResponse> =
  s.object<PaginatedMonitorResponse>(
    {
      monitors: s.array(s.lazy(() => monitorResponseSchema)),
      nextCursor: s.optional(s.lazy(() => nextCursor1Schema)),
      _keysMap: {
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
