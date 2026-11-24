import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  complimentaryAccessResponseSchema,
  type ComplimentaryAccessResponse,
} from "../models/complimentary-access-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  indexComplimentaryAccessResponseSchema,
  type IndexComplimentaryAccessResponse,
} from "../models/index-complimentary-access-response.js";
import type { Servers } from "../servers.js";

export class ComplimentaryAccessApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List complimentary access OAuth Scope: complimentary_access:read
   *
   * @remarks
   * Retrieve all complimentary access objects belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link ComplimentaryAccessApi.Index8Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index8(
    request: ComplimentaryAccessApi.Index8Request,
    options?: RequestOptions,
  ): ApiPromise<IndexComplimentaryAccessResponse, ComplimentaryAccessApi.Index8Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/complimentary_access"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "expand[]", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: indexComplimentaryAccessResponseSchema },
        errorFactory: ComplimentaryAccessApi.Index8Error,
      },
      options,
    );
  }

  /**
   * Get complimentary access OAuth Scope: complimentary_access:read
   *
   * @remarks
   * Retrieve a single complimentary access object belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link ComplimentaryAccessApi.Show5Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show5(
    request: ComplimentaryAccessApi.Show5Request,
    options?: RequestOptions,
  ): ApiPromise<ComplimentaryAccessResponse, ComplimentaryAccessApi.Show5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/complimentary_access/{complimentaryAccessId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "complimentaryAccessId", value: request.complimentaryAccessId, schema: s.string() },
        ],
        query: [{ name: "expand[]", value: request.expand, schema: s.optional(s.string()) }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: complimentaryAccessResponseSchema },
        errorFactory: ComplimentaryAccessApi.Show5Error,
      },
      options,
    );
  }
}

export namespace ComplimentaryAccessApi {
  export type Index8Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with
     * this complimentary access.<br>`stats` - Returns granted subscription counts.
     */
    expand?: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Use this opaque cursor token to fetch the next page of results. Obtain the value from
     * `next_cursor` in a previous response.
     */
    cursor?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index8Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index8Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show5Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the complimentary access object */
    complimentaryAccessId: string;
    /**
     * Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with
     * this complimentary access.
     */
    expand?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show5Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show5Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
