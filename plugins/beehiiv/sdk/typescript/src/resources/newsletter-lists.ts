import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  newsletterListIndexResponseSchema,
  type NewsletterListIndexResponse,
} from "../models/newsletter-list-index-response.js";
import {
  newsletterListResponseSchema,
  type NewsletterListResponse,
} from "../models/newsletter-list-response.js";
import {
  publicationsNewsletterListsRequestSchema,
  type PublicationsNewsletterListsRequest,
} from "../models/publications-newsletter-lists-request.js";
import {
  publicationsNewsletterListsRequest1Schema,
  type PublicationsNewsletterListsRequest1,
} from "../models/publications-newsletter-lists-request1.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class NewsletterLists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create newsletter list OAuth Scope: newsletter_lists:write
   *
   * @remarks
   * Create a new newsletter list for a publication. The list will be created with an active status.
   * The slug will be auto-generated from the name if not provided.
   *
   * @returns Created
   *
   * @throws {@link NewsletterLists.Create7Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create7(
    request: NewsletterLists.Create7Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListResponse, NewsletterLists.Create7Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/newsletter_lists"),
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
          schema: s.optional(s.lazy(() => publicationsNewsletterListsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: newsletterListResponseSchema },
        errorFactory: NewsletterLists.Create7Error,
      },
      options,
    );
  }

  /**
   * Delete newsletter list OAuth Scope: newsletter_lists:write
   *
   * @remarks
   * Delete a newsletter list belonging to a specific publication.
   *
   * @returns Successful response
   *
   * @throws {@link NewsletterLists.Delete2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete2(
    request: NewsletterLists.Delete2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, NewsletterLists.Delete2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NewsletterLists.Delete2Error,
      },
      options,
    );
  }

  /**
   * List newsletter lists OAuth Scope: newsletter_lists:read
   *
   * @remarks
   * List all newsletter lists for a publication.
   *
   * @returns OK
   *
   * @throws {@link NewsletterLists.Index14Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index14(
    request: NewsletterLists.Index14Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListIndexResponse, NewsletterLists.Index14Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/newsletter_lists"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
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
        success: { kind: "json", schema: newsletterListIndexResponseSchema },
        errorFactory: NewsletterLists.Index14Error,
      },
      options,
    );
  }

  /**
   * Get newsletter list OAuth Scope: newsletter_lists:read
   *
   * @remarks
   * Retrieve a single newsletter list belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link NewsletterLists.Show10Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show10(
    request: NewsletterLists.Show10Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListResponse, NewsletterLists.Show10Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsletterListResponseSchema },
        errorFactory: NewsletterLists.Show10Error,
      },
      options,
    );
  }

  /**
   * Update newsletter list OAuth Scope: newsletter_lists:write
   *
   * @remarks
   * Update a newsletter list belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link NewsletterLists.Update2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update2(
    request: NewsletterLists.Update2Request,
    options?: RequestOptions,
  ): ApiPromise<NewsletterListResponse, NewsletterLists.Update2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/newsletter_lists/{newsletterListId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "newsletterListId", value: request.newsletterListId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsNewsletterListsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: newsletterListResponseSchema },
        errorFactory: NewsletterLists.Update2Error,
      },
      options,
    );
  }
}

export namespace NewsletterLists {
  export type Create7Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsNewsletterListsRequest;
  };

  export class Create7Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create7Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Delete2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Delete2Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index14Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
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

  export class Index14Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index14Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show10Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show10Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show10Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Update2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the newsletter list object */
    newsletterListId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsNewsletterListsRequest1;
  };

  export class Update2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Update2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
