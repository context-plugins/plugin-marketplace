import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { authorsGetResponseSchema, type AuthorsGetResponse } from "../models/authors-get-response.js";
import { authorsListResponseSchema, type AuthorsListResponse } from "../models/authors-list-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Authors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List authors
   *
   * @remarks
   * Retrieve a list of authors available for the publication.
   *
   * @returns OK
   *
   * @throws {@link Authors.Index4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index4(
    request: Authors.Index4Request,
    options?: RequestOptions,
  ): ApiPromise<AuthorsListResponse, Authors.Index4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/authors"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authorsListResponseSchema },
        errorFactory: Authors.Index4Error,
      },
      options,
    );
  }

  /**
   * Get author
   *
   * @remarks
   * Retrieve a single author from a publication.
   *
   * @returns OK
   *
   * @throws {@link Authors.ShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show(
    request: Authors.ShowRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorsGetResponse, Authors.ShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/authors/{authorId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "authorId", value: request.authorId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authorsGetResponseSchema },
        errorFactory: Authors.ShowError,
      },
      options,
    );
  }
}

export namespace Authors {
  export type Index4Request = {
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
    /** Optionally filter authors by full name or first name (case-insensitive). */
    name?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ShowRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The author identifier. This accepts a prefixed author ID, full name, or first name. */
    authorId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class ShowError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ShowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
