import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Country, countrySchema } from "../models/country.js";
import {
  v1DepopListingsResponseSchema,
  type V1DepopListingsResponse,
} from "../models/v1-depop-listings-response.js";
import {
  v1DepopListings400Error1Schema,
  type V1DepopListings400Error1,
} from "../models/v1-depop-listings400-error1.js";
import {
  v1DepopListings401Error1Schema,
  type V1DepopListings401Error1,
} from "../models/v1-depop-listings401-error1.js";
import {
  v1DepopListings429Error1Schema,
  type V1DepopListings429Error1,
} from "../models/v1-depop-listings429-error1.js";
import {
  v1DepopListings502Error1Schema,
  type V1DepopListings502Error1,
} from "../models/v1-depop-listings502-error1.js";
import {
  v1DepopListings503Error1Schema,
  type V1DepopListings503Error1,
} from "../models/v1-depop-listings503-error1.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Depop {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Depop active listings
   *
   * @remarks
   * Current Depop listings in the US, UK, Australia or Canada with asking price, original price
   * before a discount, shipping, brand, size, condition and seller. Page with nextCursor. One
   * successful call uses one request.
   *
   * @returns Active listings
   *
   * @throws {@link Depop.GetV1DepopListingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1DepopListings(
    request: Depop.GetV1DepopListingsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DepopListingsResponse, Depop.GetV1DepopListingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/depop/listings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "country", value: request.country, schema: s.defaulted(countrySchema, Country.Us) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 24) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DepopListingsResponseSchema },
        errorFactory: Depop.GetV1DepopListingsError,
      },
      options,
    );
  }
}

export namespace Depop {
  export type GetV1DepopListingsRequest = {
    keyword: string;
    /** @default Country.Us */
    country?: Country;
    /** @default 24 */
    count?: number;
    cursor?: string;
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
  };

  export const getV1DepopListingsRequestSchema: Schema<GetV1DepopListingsRequest> = s.lazySchema(() =>
    s.object<GetV1DepopListingsRequest>({
      keyword: s.string().check(s.maxLength(300)),
      country: s.defaulted(countrySchema, Country.Us),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(48)), 24),
      cursor: s.optional(s.string().check(s.maxLength(200))),
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
    }),
  );

  export class GetV1DepopListingsError extends ApiError {
    declare readonly payload:
      | Declared<"v1DepopListings400Error1", V1DepopListings400Error1>
      | Declared<"v1DepopListings401Error1", V1DepopListings401Error1>
      | Declared<"v1DepopListings429Error1", V1DepopListings429Error1>
      | Declared<"v1DepopListings502Error1", V1DepopListings502Error1>
      | Declared<"v1DepopListings503Error1", V1DepopListings503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1DepopListingsError> = [
      {
        on: 400,
        kind: "v1DepopListings400Error1",
        decode: { kind: "json", schema: v1DepopListings400Error1Schema },
      },
      {
        on: 401,
        kind: "v1DepopListings401Error1",
        decode: { kind: "json", schema: v1DepopListings401Error1Schema },
      },
      {
        on: 429,
        kind: "v1DepopListings429Error1",
        decode: { kind: "json", schema: v1DepopListings429Error1Schema },
      },
      {
        on: 502,
        kind: "v1DepopListings502Error1",
        decode: { kind: "json", schema: v1DepopListings502Error1Schema },
      },
      {
        on: 503,
        kind: "v1DepopListings503Error1",
        decode: { kind: "json", schema: v1DepopListings503Error1Schema },
      },
    ];
  }
}
