import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsGetRequestExpandItemSchema,
  type PublicationsGetRequestExpandItem,
} from "../models/publications-get-request-expand-item.js";
import {
  publicationsGetResponseSchema,
  type PublicationsGetResponse,
} from "../models/publications-get-response.js";
import {
  PublicationsListRequestOrderBy,
  publicationsListRequestOrderBySchema,
} from "../models/publications-list-request-order-by.js";
import {
  publicationsListResponseSchema,
  type PublicationsListResponse,
} from "../models/publications-list-response.js";
import {
  publicationsRequestExpandItemSchema,
  type PublicationsRequestExpandItem,
} from "../models/publications-request-expand-item.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class Publications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List publications OAuth Scope: publications:read
   *
   * @remarks
   * Retrieve all publications associated with your API key.
   *
   * @returns OK
   *
   * @throws {@link Publications.Index18Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index18(
    request: Publications.Index18Request,
    options?: RequestOptions,
  ): ApiPromise<PublicationsListResponse, Publications.Index18Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "expand",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => publicationsRequestExpandItemSchema))),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(publicationsListRequestOrderBySchema, PublicationsListRequestOrderBy.Created),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicationsListResponseSchema },
        errorFactory: Publications.Index18Error,
      },
      options,
    );
  }

  /**
   * Get publication OAuth Scope: publications:read
   *
   * @remarks
   * Retrieve a single publication
   *
   * @returns OK
   *
   * @throws {@link Publications.Show13Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show13(
    request: Publications.Show13Request,
    options?: RequestOptions,
  ): ApiPromise<PublicationsGetResponse, Publications.Show13Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          {
            name: "expand",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => publicationsGetRequestExpandItemSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicationsGetResponseSchema },
        errorFactory: Publications.Show13Error,
      },
      options,
    );
  }
}

export namespace Publications {
  export type Index18Request = {
    /**
     * Optionally expand the results by adding additional information like subscription counts and
     * engagement stats.
     */
    expand?: PublicationsRequestExpandItem[];
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * The field that the results are sorted by. Defaults to created<br> `created` - The time in
     * which the publication was first created.<br> `name` - The name of the publication.
     *
     * @default PublicationsListRequestOrderBy.Created
     */
    orderBy?: PublicationsListRequestOrderBy;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index18Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index18Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show13Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * Optionally expand the results by adding additional information like subscription counts and
     * engagement stats.
     */
    expand?: PublicationsGetRequestExpandItem[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Show13Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show13Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
