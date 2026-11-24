import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audienceExport1Schema, type AudienceExport1 } from "./audience-export1.js";
import { v1BetaAudienceRowSchema, type V1BetaAudienceRow } from "./v1-beta-audience-row.js";

/** A list of users in an audience export. */
export type QueryAudienceExportResponse = {
  /**
   * The total number of rows in the AudienceExport result. `rowCount` is independent of the number
   * of rows returned in the response, the `limit` request parameter, and the `offset` request
   * parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API
   * request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this
   * pagination parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  rowCount?: number;
  /**
   * Configuration data about AudienceExport being queried. Returned to help interpret the audience
   * rows in this response. For example, the dimensions in this AudienceExport correspond to the
   * columns in the AudienceRows.
   */
  audienceExport?: AudienceExport1;
  /**
   * Rows for each user in an audience export. The number of rows in this response will be less than
   * or equal to request's page size.
   */
  audienceRows?: V1BetaAudienceRow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryAudienceExportResponseSchema: Schema<QueryAudienceExportResponse> =
  s.object<QueryAudienceExportResponse>(
    {
      rowCount: s.optional(s.int()),
      audienceExport: s.optional(s.lazy(() => audienceExport1Schema)),
      audienceRows: s.optional(s.array(s.lazy(() => v1BetaAudienceRowSchema))),
    },
    { additionalProperties: s.json() },
  );
