import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to list users in an audience export. */
export type QueryAudienceExportRequest = {
  /**
   * Optional. The row count of the start row. The first row is counted as row 0. When paging, the
   * first request does not specify offset; or equivalently, sets offset to 0; the first request
   * returns the first `limit` of rows. The second request sets offset to the `limit` of the first
   * request; the second request returns the second `limit` of rows. To learn more about this
   * pagination parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  offset?: string;
  /**
   * Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API
   * returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be
   * positive. The API can also return fewer rows than the requested `limit`, if there aren't as
   * many dimension values as the `limit`. To learn more about this pagination parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  limit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryAudienceExportRequestSchema: Schema<QueryAudienceExportRequest> =
  s.object<QueryAudienceExportRequest>(
    {
      offset: s.optional(s.string()),
      limit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
