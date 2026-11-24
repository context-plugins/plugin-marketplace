import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicationEngagementEmailType1Schema,
  type PublicationEngagementEmailType1,
} from "./publication-engagement-email-type1.js";
import {
  publicationEngagementGranularity2Schema,
  type PublicationEngagementGranularity2,
} from "./publication-engagement-granularity2.js";
import {
  publicationEngagementMetricsSchema,
  type PublicationEngagementMetrics,
} from "./publication-engagement-metrics.js";

export type PublicationEngagementsResponse = {
  /**
   * The list of engagement metrics for the publication within the specified date range and
   * granularity. Returns an empty list if there is no engagement data for the specified period.
   */
  data: PublicationEngagementMetrics[];
  /** The unique identifier of the publication. Passed as a path parameter in the request. */
  publicationId: string;
  /** The granularity at which the engagement metrics are reported. */
  granularity: PublicationEngagementGranularity2;
  /** The email type filter applied to the engagement metrics. Defaults to `all`. */
  emailType: PublicationEngagementEmailType1;
  /** The starting date of the engagement metrics. */
  startDate: string;
  /** The number of days of engagement metrics returned. */
  numberOfDays: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationEngagementsResponseSchema: Schema<PublicationEngagementsResponse> =
  s.object<PublicationEngagementsResponse>(
    {
      data: s.array(s.lazy(() => publicationEngagementMetricsSchema)),
      publicationId: s.string(),
      granularity: publicationEngagementGranularity2Schema,
      emailType: publicationEngagementEmailType1Schema,
      startDate: s.dateOnly(),
      numberOfDays: s.int(),
      _keysMap: {
        publicationId: "publication_id",
        emailType: "email_type",
        startDate: "start_date",
        numberOfDays: "number_of_days",
      },
    },
    { additionalProperties: s.json() },
  );
