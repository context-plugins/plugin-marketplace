import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  activitiesSignaturesByBusinessResponseInternalSchema,
  type ActivitiesSignaturesByBusinessResponse,
} from "../models/activities-signatures-by-business-response.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import { Sort, sortSchema } from "../models/sort.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for signature activity reporting.
 */
export class Report {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get signature activities by business
   *
   * @remarks
   * Returns detailed signature `activities` for your business and its members within a specified
   * date range.
   *
   * Use these parameters to filter for a specific time range.
   *
   * | **Parameter** | **Description** | **Mandatory** |
   * | --- | --- | --- |
   * | `start_date` | The start date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |
   * | `end_date` | The end date of the range to fetch the signature `activities`. Format: `yyyy-MM-dd.` | yes |
   *
   * ### **Pagination**
   *
   * The result set can be controlled using the optional pagination parameters `page` and `size`
   *
   * | **Parameter** | **Description** | **Mandatory** |
   * | --- | --- | --- |
   * | `page` | The page number to fetch the signature `activities`. Must be a positive integer. Default: 1 | no |
   * | `size` | The size of the page to fetch the signature activities. Must be a positive integer. Default: 25 Maximum: 100 | no |
   * | `sort` | The sort order of the signature activities. Can be `asc` or `desc`. Default is `desc`. | no |
   *
   * ### **Response**
   *
   * The response contains the following information.
   *
   * **General**
   *
   * | **Field** | **Description** |
   * | --- | --- |
   * | `activities` | Array of `activities`. See the following subchapter _Activities_. |
   * | `total_items` | Total items to fetch when paginating through all the pages. |
   * | `total_pages` | Total pages to fetch when paginating through all the pages. |
   * | `current_page` | Current page number. |
   * | `size` | Size of the page. |
   *
   * **Activities**
   *
   * | **Field** | **Description** |
   * | --- | --- |
   * | `id` | The ID of the signature `activity`. |
   * | `action` | The action type of a signature activity. Can be `signed` or `sealed`. |
   * | `timestamp` | The timestamp of the signature activity. |
   * | `signature_request_id` | The signature request ID. |
   * | `cost_center` | The cost center of the signature paying party. This information might not necessarily be present. |
   * | `initiator` | The initiator `user` of the signature `activity`. See the following subchapter _User_. |
   * | `signer` | The signer `user` of the signature `activity`. See the following subchapter _User_. |
   *
   * **User**
   *
   * | **Field** | **Description** |
   * | --- | --- |
   * | `email` | The email of the `user`. |
   * | `first_name` | The first name of the `user`. |
   * | `last_name` | The last name of the `user`. |
   * | `type` | The membership status of the `user` in relation to the business. Can be `api`, `external`, `member` or `unknown`. |
   * | `mobile` | The mobile number of the user. |
   *
   * @returns OK
   *
   * @throws {@link Report.GetActivitiesSignaturesByBusinessError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActivitiesSignaturesByBusiness(
    request: Report.GetActivitiesSignaturesByBusinessRequest,
    options?: RequestOptions,
  ): ApiPromise<ActivitiesSignaturesByBusinessResponse, Report.GetActivitiesSignaturesByBusinessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleReportApi("/activities/signatures"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "start_date", value: request.startDate, schema: s.dateOnly() },
          { name: "end_date", value: request.endDate, schema: s.dateOnly() },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "size", value: request.size, schema: s.defaulted(s.float64(), 25) },
          { name: "sort", value: request.sort, schema: s.defaulted(sortSchema, Sort.Desc) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activitiesSignaturesByBusinessResponseInternalSchema },
        errorFactory: Report.GetActivitiesSignaturesByBusinessError,
      },
      options,
    );
  }
}

export namespace Report {
  export type GetActivitiesSignaturesByBusinessRequest = {
    /** Start Date to find */
    startDate: string;
    /** End Date to find */
    endDate: string;
    /** Page for pagination. @default 1 */
    page?: number;
    /** Page size for pagination. @default 25 */
    size?: number;
    /** Sort order @default Sort.Desc */
    sort?: Sort;
  };

  export const getActivitiesSignaturesByBusinessRequestSchema: Schema<GetActivitiesSignaturesByBusinessRequest> =
    s.lazySchema(() =>
      s.object<GetActivitiesSignaturesByBusinessRequest>({
        startDate: s.dateOnly(),
        endDate: s.dateOnly(),
        page: s.defaulted(s.float64(), 1),
        size: s.defaulted(s.float64().check(s.lte(100)), 25),
        sort: s.defaulted(sortSchema, Sort.Desc),
      }),
    );

  export class GetActivitiesSignaturesByBusinessError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetActivitiesSignaturesByBusinessError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
