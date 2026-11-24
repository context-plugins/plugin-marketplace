import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { indexTiersResponseSchema, type IndexTiersResponse } from "../models/index-tiers-response.js";
import {
  publicationsTiersRequestSchema,
  type PublicationsTiersRequest,
} from "../models/publications-tiers-request.js";
import {
  publicationsTiersRequest1Schema,
  type PublicationsTiersRequest1,
} from "../models/publications-tiers-request1.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import { tierResponseSchema, type TierResponse } from "../models/tier-response.js";
import type { Servers } from "../servers.js";

export class Tiers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a tier OAuth Scope: tiers:write
   *
   * @remarks
   * Create a new tier for a publication.
   *
   * @returns Created
   *
   * @throws {@link Tiers.Create12Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create12(
    request: Tiers.Create12Request,
    options?: RequestOptions,
  ): ApiPromise<TierResponse, Tiers.Create12Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/tiers"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsTiersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tierResponseSchema },
        errorFactory: Tiers.Create12Error,
      },
      options,
    );
  }

  /**
   * List tiers OAuth Scope: tiers:read
   *
   * @remarks
   * Retrieve all tiers belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Tiers.Index21Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index21(
    request: Tiers.Index21Request,
    options?: RequestOptions,
  ): ApiPromise<IndexTiersResponse, Tiers.Index21Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/tiers"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "expand[]", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
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
        success: { kind: "json", schema: indexTiersResponseSchema },
        errorFactory: Tiers.Index21Error,
      },
      options,
    );
  }

  /**
   * Update a tier OAuth Scope: tiers:write
   *
   * @remarks
   * Update an existing tier belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Tiers.Patch4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patch4(
    request: Tiers.Patch4Request,
    options?: RequestOptions,
  ): ApiPromise<TierResponse, Tiers.Patch4Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/tiers/{tierId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "tierId", value: request.tierId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsTiersRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: tierResponseSchema },
        errorFactory: Tiers.Patch4Error,
      },
      options,
    );
  }

  /**
   * Update a tier OAuth Scope: tiers:write
   *
   * @remarks
   * Update an existing tier belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Tiers.Put4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  put4(request: Tiers.Put4Request, options?: RequestOptions): ApiPromise<TierResponse, Tiers.Put4Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/tiers/{tierId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "tierId", value: request.tierId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsTiersRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: tierResponseSchema },
        errorFactory: Tiers.Put4Error,
      },
      options,
    );
  }

  /**
   * Get tier OAuth Scope: tiers:read
   *
   * @remarks
   * Retrieve a single tier belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Tiers.Show16Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show16(
    request: Tiers.Show16Request,
    options?: RequestOptions,
  ): ApiPromise<TierResponse, Tiers.Show16Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/tiers/{tierId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "tierId", value: request.tierId, schema: s.string() },
        ],
        query: [{ name: "expand[]", value: request.expand, schema: s.optional(s.string()) }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tierResponseSchema },
        errorFactory: Tiers.Show16Error,
      },
      options,
    );
  }
}

export namespace Tiers {
  export type Create12Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsTiersRequest;
  };

  export class Create12Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create12Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index21Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * Optional list of expandable objects.<br>`stats` - Returns statistics about the
     * tier(s).<br>`prices` - Returns prices for the tier(s).
     */
    expand?: string;
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
    /** Bearer authentication */
    authorization: string;
  };

  export class Index21Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index21Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Patch4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the tier object */
    tierId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsTiersRequest1;
  };

  export class Patch4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Patch4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Put4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the tier object */
    tierId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsTiersRequest1;
  };

  export class Put4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Put4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show16Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the tier object */
    tierId: string;
    /**
     * Optional list of expandable objects.<br>`stats` - Returns statistics about the
     * tier(s).<br>`prices` - Returns prices for the tier(s).
     */
    expand?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show16Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show16Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
