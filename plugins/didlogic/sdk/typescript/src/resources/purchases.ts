import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1PurchasesResponseSchema,
  type ApiV1PurchasesResponse,
} from "../models/api-v1-purchases-response.js";
import {
  apiV1Purchases403Error1Schema,
  type ApiV1Purchases403Error1,
} from "../models/api-v1-purchases403-error1.js";
import type { Servers } from "../servers.js";

export class Purchases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List purchased DID numbers
   *
   * @remarks
   * Retrieve a paginated list of DID numbers purchased by the authenticated user.
   *
   * **Features:**
   * - Ordered by most recent first
   * - Pagination: 100 DIDs per page (max 1000)
   * - Available in JSON and CSV formats
   *
   * **Returned Information:**
   * - DID number and status
   * - Purchase and expiration dates
   * - Monthly cost and features
   * - SMS/voice capabilities
   *
   * `purchases[].number` feeds purchases_destinations_index, purchases_destinations_create,
   * purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and
   * sms_create: it is the `purchase_id` of the destination operations, an entry of `did_numbers[]`
   * when releasing numbers, and `sm[source]` when the number has SMS enabled. See also:
   * numbers_index, the same numbers with their inventory id.
   *
   * @returns Successfully returns paginated list of purchased DID numbers in JSON format
   *
   * @throws {@link Purchases.PurchasesIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasesIndex(
    request: Purchases.PurchasesIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PurchasesResponse, Purchases.PurchasesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/purchases"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PurchasesResponseSchema },
        errorFactory: Purchases.PurchasesIndexError,
      },
      options,
    );
  }
}

export namespace Purchases {
  export type PurchasesIndexRequest = {
    /** Page number for pagination (starts from 1) @default 1 */
    page?: number;
    /** Number of items per page @default 20 */
    perPage?: number;
  };

  export const purchasesIndexRequestSchema: Schema<PurchasesIndexRequest> = s.lazySchema(() =>
    s.object<PurchasesIndexRequest>({
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class PurchasesIndexError extends ApiError {
    declare readonly payload: Declared<"apiV1Purchases403Error1", ApiV1Purchases403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<PurchasesIndexError> = [
      {
        on: 403,
        kind: "apiV1Purchases403Error1",
        decode: { kind: "json", schema: apiV1Purchases403Error1Schema },
      },
    ];
  }
}
