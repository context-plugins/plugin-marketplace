import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  postTemplatesGetResponseSchema,
  type PostTemplatesGetResponse,
} from "../models/post-templates-get-response.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class PostTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get post templates OAuth Scope: posts:read
   *
   * @remarks
   * Retrieve a list of post templates available for the publication.
   *
   * @returns OK
   *
   * @throws {@link PostTemplates.Index16Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index16(
    request: PostTemplates.Index16Request,
    options?: RequestOptions,
  ): ApiPromise<PostTemplatesGetResponse, PostTemplates.Index16Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/post_templates"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "order",
            value: request.order,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postTemplatesGetResponseSchema },
        errorFactory: PostTemplates.Index16Error,
      },
      options,
    );
  }
}

export namespace PostTemplates {
  export type Index16Request = {
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
    /** The direction of the request. Defaults to `asc`. @default RequestDirection.Asc */
    order?: RequestDirection;
    /** The field to order by. Defaults to `created`. */
    orderBy?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index16Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index16Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
