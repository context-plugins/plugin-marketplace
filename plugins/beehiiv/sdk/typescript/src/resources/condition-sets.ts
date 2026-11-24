import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { conditionSetPurposeSchema, type ConditionSetPurpose } from "../models/condition-set-purpose.js";
import {
  conditionSetShowExpandItemsSchema,
  type ConditionSetShowExpandItems,
} from "../models/condition-set-show-expand-items.js";
import {
  conditionSetShowResponseSchema,
  type ConditionSetShowResponse,
} from "../models/condition-set-show-response.js";
import {
  conditionSetsListResponseSchema,
  type ConditionSetsListResponse,
} from "../models/condition-sets-list-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class ConditionSets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List condition sets OAuth Scope: condition_sets:read
   *
   * @remarks
   * Retrieve all active condition sets for a publication. Condition sets define reusable audience
   * segments for targeting content to specific subscribers. Use the `purpose` parameter to filter
   * by a specific use case.
   *
   * @returns OK
   *
   * @throws {@link ConditionSets.Index9Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index9(
    request: ConditionSets.Index9Request,
    options?: RequestOptions,
  ): ApiPromise<ConditionSetsListResponse, ConditionSets.Index9Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/condition_sets"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "purpose",
            value: request.purpose,
            schema: s.optional(s.lazy(() => conditionSetPurposeSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conditionSetsListResponseSchema },
        errorFactory: ConditionSets.Index9Error,
      },
      options,
    );
  }

  /**
   * Get condition set OAuth Scope: condition_sets:read
   *
   * @remarks
   * Retrieve a single active dynamic content condition set for a publication. Use `expand[]=stats`
   * to calculate and return the active subscriber count synchronously.
   *
   * @returns OK
   *
   * @throws {@link ConditionSets.Show6Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show6(
    request: ConditionSets.Show6Request,
    options?: RequestOptions,
  ): ApiPromise<ConditionSetShowResponse, ConditionSets.Show6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/condition_sets/{conditionSetId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "conditionSetId", value: request.conditionSetId, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => conditionSetShowExpandItemsSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conditionSetShowResponseSchema },
        errorFactory: ConditionSets.Show6Error,
      },
      options,
    );
  }
}

export namespace ConditionSets {
  export type Index9Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results. When provided, pagination will use cursor-based method which is more
     * efficient and consistent than offset-based pagination.
     */
    cursor?: string;
    /**
     * **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please
     * migrate to cursor-based pagination using the `cursor` parameter. If not specified, results
     * 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * Filter condition sets by purpose. When not specified, all active condition sets are returned.
     */
    purpose?: ConditionSetPurpose;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index9Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index9Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show6Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The UUID of the condition set object */
    conditionSetId: string;
    /**
     * Optionally expand the response to include additional data.<br> `stats` - Calculates and
     * returns the active subscriber count for this condition set synchronously.
     */
    expand?: ConditionSetShowExpandItems[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Show6Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show6Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
