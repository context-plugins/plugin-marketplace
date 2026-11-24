import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationEngagementEmailTypeSchema,
  type PublicationEngagementEmailType,
} from "../models/publication-engagement-email-type.js";
import {
  publicationEngagementGranularitySchema,
  type PublicationEngagementGranularity,
} from "../models/publication-engagement-granularity.js";
import {
  publicationEngagementsResponseSchema,
  type PublicationEngagementsResponse,
} from "../models/publication-engagements-response.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class Engagements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get publication engagements OAuth Scope: publications:read
   *
   * @remarks
   * Retrieve email engagement metrics for a specific publication over a defined date range and
   * granularity.
   *
   * By default, the endpoint returns metrics for the past day, aggregated daily. The max number of
   * days allowed is 31. All dates and times are in UTC.
   *
   * @returns OK
   *
   * @throws {@link Engagements.Index12Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index12(
    request: Engagements.Index12Request,
    options?: RequestOptions,
  ): ApiPromise<PublicationEngagementsResponse, Engagements.Index12Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/engagements"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "start_date", value: request.startDate, schema: s.optional(s.dateOnly()) },
          { name: "number_of_days", value: request.numberOfDays, schema: s.optional(s.int()) },
          {
            name: "granularity",
            value: request.granularity,
            schema: s.optional(s.lazy(() => publicationEngagementGranularitySchema)),
          },
          {
            name: "email_type",
            value: request.emailType,
            schema: s.optional(s.lazy(() => publicationEngagementEmailTypeSchema)),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicationEngagementsResponseSchema },
        errorFactory: Engagements.Index12Error,
      },
      options,
    );
  }
}

export namespace Engagements {
  export type Index12Request = {
    publicationId: string;
    /**
     * The starting date for the engagement metrics in `YYYY-MM-DD` format. Defaults to 1 day ago if
     * not provided.
     */
    startDate?: string;
    /**
     * The number of days to return engagement metrics for, starting from `start_date`. Must be
     * between 1 and 31. Defaults to `1` if not provided.
     */
    numberOfDays?: number;
    /**
     * The granularity at which to report the engagement metrics. Defaults to `day` if not provided.
     */
    granularity?: PublicationEngagementGranularity;
    /**
     * Filter engagement metrics by email type. If omitted, all email engagement is included.<br>
     * `post`: Only post emails.<br> `message`: Only automated and system-generated emails.
     */
    emailType?: PublicationEngagementEmailType;
    /**
     * The direction that the results are sorted in. Defaults to `asc`.<br> `asc`: Oldest to
     * newest<br> `desc`: Newest to oldest
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index12Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index12Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
